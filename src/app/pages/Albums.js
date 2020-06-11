import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { deleteAlbum, addAlbum } from '../constants/Actions';
import Constants from '../constants/Constants';
import API from '../api/API';
import CreateAlbum from '../views/CreateAlbum';

class Albums extends Component {
    handleDeleteAlbum(albumId) {
        API.delete(`${Constants.BASE_URL}/albums/${albumId}`).then(() => {
            this.props.deleteAlbum(albumId);
        }, (error) => {
            alert(`Error deleting album - ${error}`);
        });
    }
    
    handleCreateAlbum(album) {
        API.post(`${Constants.BASE_URL}/albums`, album).then((album) => {
            this.props.addAlbum(album);
        }, (error) => {
            alert(`Error creating album - ${error}`);
        });
    }
    
    render() {
        return (<div id="albumsPage" className="mt-2">
            <CreateAlbum createAlbum={(album) => {
                this.handleCreateAlbum(album)
            }} />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.albums.map((album) => {
                    return (<tr>
                        <th scope="row" className="align-middle">{album.id}</th>
                        <td className="align-middle">{album.title}</td>
                        <td className="align-middle">
                            <button type="button" className="btn btn-danger btn-sm" onClick={() => this.handleDeleteAlbum(album.id)}>Delete</button>
                        </td>
                    </tr>)
                })}
                </tbody>
            </table>
        </div>);
    }
}

export default connect((state) => {
    return {
        albums: state.albums
    };
}, (dispatch) => {
    return {
        deleteAlbum: (albumId) => dispatch(deleteAlbum(albumId)),
        addAlbum: (album) => dispatch(addAlbum(album))
    };
})(Albums);
