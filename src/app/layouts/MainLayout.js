import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlbums, setImages } from '../constants/Actions';
import API from '../api/API';
import Constants from '../constants/Constants';

class MainLayout extends Component {
    componentDidMount() {
        API.get(`${Constants.BASE_URL}/photos`).then((images) => {
            this.props.setImages(images);
        }, (error) => {
            alert(`Error fetching images: ${error}`);
        });
        
        API.get(`${Constants.BASE_URL}/albums`).then((albums) => {
            this.props.setAlbums(albums);
        }, (error) => {
            alert(`Error fetching albums: ${error}`)
        })
    }
    
    render() {
        return (<div className="container-fluid">
            <div className="row">
                <div className="col-10 offset-1">
                    {this.props.children}
                </div>
            </div>
        </div>)
    }
}

export default connect(null, (dispatch) => {
    return {
        setImages: (images) => dispatch(setImages(images)),
        setAlbums: (albums) => dispatch(setAlbums(albums))
    }
})(MainLayout);
