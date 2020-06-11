import React, { Component } from 'react';

export default class ImagesPagination extends Component {
    render() {
        const pages = [];
        const pagesMargin = 10;
        const startPage = this.props.currentPage >= pagesMargin ? this.props.currentPage - (pagesMargin - 1) : 1;
        const endPage = this.props.currentPage + pagesMargin <= this.props.totalPages ? this.props.currentPage + pagesMargin : this.props.totalPages;
        
        for (let page = startPage; page <= endPage; page++) {
            pages.push(<li className={`page-item ${this.props.currentPage === page ? 'active' : ''}`}>
                <a className="page-link" href="#" onClick={() => this.props.changePage(page)}>{page}</a>
            </li>);
        }
        
        return (<nav>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => this.props.changePage(1)}>&laquo;</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => this.props.changePage(this.props.currentPage - 1)}>&lsaquo;</a>
                </li>
                {pages}
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => this.props.changePage(this.props.currentPage + 1)}>&rsaquo;</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => this.props.changePage(this.props.totalPages)}>&raquo;</a>
                </li>
            </ul>
        </nav>);
    }
}
