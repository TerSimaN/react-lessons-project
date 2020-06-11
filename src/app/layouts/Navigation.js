import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (<div className="navbar navbar-dark bg-dark navbar-expand-lg">
            <NavLink to="/" className="navbar-brand">React Lessons</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/images">Images</NavLink>
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/albums">Albums</NavLink>
                </div>
            </div>
        </div>);
    }
}
