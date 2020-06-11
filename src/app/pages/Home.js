import React, { Component } from 'react'
import ImageUpload from '../views/ImageUpload';
import LatestImages from '../views/LatestImages';
import API from '../api/API';
import Constants from '../constants/Constants';
import { connect } from 'react-redux';
import { addImage } from '../constants/Actions';

class Home extends Component {
    state = {
        isUploadingImage: false
    }
    
    handleImageUpload(image) {
        this.setState({
            isUploadingImage: true
        })
        
        API.post(`${Constants.BASE_URL}/photos`, image).then(() => {
            this.setState({
                isUploadingImage: false
            });
            
            this.props.addImage(image);
        }, (error) => {
            this.setState({
                isUploadingImage: false
            });
            
            alert(`Error uploading image: ${error}`);
        })
    }
    
    render() {
        return (<div id="homePage">
            <ImageUpload isUploading={this.state.isUploadingImage} uploadImage={(imageUrl) => {
                this.handleImageUpload(imageUrl)
            }} albums={this.props.albums}/>
            <LatestImages images={this.props.images.slice(0, 42)}/>
        </div>);
    }
}

export default connect(
    (state) => {
        return {
            images: state.images,
            albums: state.albums
        }
    },
    (dispatch) => {
        return {
            addImage: (image) => dispatch(addImage(image)),
        };
    }
)(Home);
