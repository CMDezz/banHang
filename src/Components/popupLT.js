import React, { Component } from 'react';

class PopupLT extends Component {
    render() {
        return (
            <div id={this.props.id} className="modal fade" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.Name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <table className="table table-hover">
                                <tbody>
                                    <tr>
                                        <th>Price</th>
                                        <td>{this.props.Price}</td>
                                    </tr>
                                    <tr>
                                        <th>Description</th>
                                        <td>{this.props.Desc}</td>
                                    </tr>
                                    <tr>
                                        <th>Screen</th>
                                        <td>{this.props.SCREEN}</td>
                                    </tr>
                                    <tr>
                                        <th>CPU</th>
                                        <td>{this.props.CPU}</td>
                                    </tr>
                                    <tr>
                                        <th>RAM</th>
                                        <td>{this.props.RAM}</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


           
        );
    }
}

export default PopupLT;
