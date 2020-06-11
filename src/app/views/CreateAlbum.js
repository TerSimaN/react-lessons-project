import React, { Component } from 'react';

export default class CreateAlbum extends Component {
    state = {
        title: ''
    }
    
    handleCreateBtnClick() {
        this.props.createAlbum({
            title: this.state.title
        });
        
        this.setState({
            title: ''
        });
    }
    
    render() {
        return (<div className="row mb-2">
            <div className="col col-4">
                <h3>Create Album</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="albumTitle">Title</label>
                        <input type="text" className="form-control" id="albumTitle" placeholder="Album title" value={this.state.title}
                               onChange={(event) => {
                                   this.setState({
                                       title: event.target.value
                                   });
                               }}/>
                    </div>
                    <button type="button" className="btn btn-primary"
                            onClick={() => this.handleCreateBtnClick()}>Create
                    </button>
                </form>
            </div>
        </div>);
    }
};
