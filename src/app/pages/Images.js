import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteImage } from '../constants/Actions';
import Constants from '../constants/Constants';
import API from '../api/API';
import ImagesPagination from '../views/ImagesPagination';

class Images extends Component {
    state = {
        currentPage: 1
    }
    
    handleDeleteImage(imageId) {
        API.delete(`${Constants.BASE_URL}/photos/${imageId}`).then(() => {
            this.props.deleteImage(imageId);
        }, (error) => {
            alert(`Unable to delete image - ${error}`);
        })
    }
    
    renderImages() {
        const offset = 25 * (this.state.currentPage - 1);
        const images = this.props.images.slice(offset, offset + 25).map((image) => {
            const album = this.props.albums.find((album) => {
                return album.id === image.albumId;
            });
    
            return (<div className="card mb-2">
                <a href={image.url} target="_blank">
                    <img className="card-img-top" src={image.url} alt={image.title} />
                </a>
                <div className="card-body">
                    <h6 className="card-title">{image.title}</h6>
                    <p className="card-text">
                        <strong>Album: </strong>{album.title}
                    </p>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => this.handleDeleteImage(image.id)}>Delete</button>
                </div>
            </div>)
        });
        
        const imagesDecks = [];
        
        for (let i = 0, m = 5; i < images.length; i += 5, m += 5) {
            imagesDecks.push(<div className="card-deck">
                {images.slice(i, m)}
            </div>);
        }
        
        return imagesDecks;
    }
    
    render() {
        if (this.props.images.length === 0 || this.props.albums.length === 0) {
            return null;
        }
        
        return (<div className="imagesPage mt-2">
            <div className="row justify-content-center">
                <div className="col col-12">
                    {this.renderImages()}
                </div>
                <div className="col">
                    <ImagesPagination currentPage={this.state.currentPage} totalPages={this.props.totalPages}
                                      totalItems={this.props.totalImages} changePage={(page) => {
                        this.setState({
                            currentPage: page
                        })
                    }}/>
                </div>
            </div>
        </div>);
    }
}

export default connect((state) => {
    return {
        images: state.images,
        albums: state.albums,
        totalImages: state.images.length,
        totalPages: Math.ceil(state.images.length / 25)
    };
}, (dispatch) => {
    return {
        deleteImage: (imageId) => dispatch(deleteImage(imageId))
    };
})(Images);
