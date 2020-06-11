import React, { Component } from 'react';

export default class ImageUpload extends Component {
    state = {
        url: '',
        title: '',
        albumId: null
    }
    
    handleUploadBtnClick() {
        this.props.uploadImage(this.state);
        this.setState({
           url: '',
           title: '',
           albumId: null
        });
    }
    
    render() {
        return (<div className="row mb-2 mt-2">
            <div className="col col-5">
                <h3>Image Upload</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="imageUrl">URL</label>
                        <input type="text" className="form-control" id="imageUrl" value={this.state.url} placeholder="Image URL"
                               onChange={(event) => {
                                   this.setState({ url: event.target.value })
                               }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageTitle">Title</label>
                        <input type="text" className="form-control" id="imageTitle" value={this.state.title} placeholder="Image title"
                               onChange={(event) => {
                                   this.setState({ title: event.target.value })
                               }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageAlbum">Album</label>
                        <select className="form-control" id="imageAlbum" placeholder="Image album"
                               onChange={(event) => {
                                   this.setState({ albumId: parseInt(event.target.value) })
                               }}
                        >
                            <option value="0" selected="selected">&lt;select&gt;</option>
                            {this.props.albums.map((album) => {
                                return (<option value={album.id}>{album.title}</option>)
                            })}
                        </select>
                    </div>
                    <button type="button" disabled={this.props.isUploading} className="btn btn-primary" onClick={() => {
                        this.handleUploadBtnClick()
                    }}>Upload</button>
                </form>
            </div>
        </div>);
    }
}
