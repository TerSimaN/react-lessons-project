import React, { Component } from 'react';

export default class LatestImages extends Component {
    render() {
        return (<div className="row mb-3">
            <div className="col col-10">
                <h2>Latest Images</h2>
                {this.props.images.map((image) => {
                    return <a href={image.url} target="_blank">
                        <img src={image.url} className="img-thumbnail rounded mr-2 mt-3" alt={image.title} width={150} height={150} />
                    </a>;
                })}
            </div>
        </div>);
    }
}
