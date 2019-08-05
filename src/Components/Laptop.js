import React, { Component } from 'react';
import PopupLT from './popupLT';
import Swal from 'sweetalert2'

class Laptop extends Component {
    
    handleCart=()=>{
        Swal.fire({
            title: 'Bạn chọn mua sản phẩm này ? ',
            text: ` ${this.props.Name} sẽ được đưa tới giỏ hàng!`,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Done!',
                ` ${this.props.Name} đã được chọn.`,
                'success'
              )
            }
          })
    }
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card bg-light" style={{ width: 300 }}>
                        <img className="card-img-top" src={this.props.Url} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 className="card-title text-center">{this.props.Name}</h4>
                            <h4 >{this.props.Price}</h4>
                            <p className="card-text">{this.props.Desc}</p>
                            <a style={{cursor:"pointer",color:'white'}} className="btn btn-primary" data-toggle="modal" data-target={`#${this.props.id}`}>Detail</a>
                            <a style={{cursor:"pointer",color:'white'}} className="btn btn-danger" onClick={this.handleCart}>Cart</a>
                        </div>
                    </div>
                </div>
                <PopupLT id={this.props.id}  Name = {this.props.Name} Price = {this.props.Price} Desc={this.props.Desc} SCREEN={this.props.SCREEN} RAM={this.props.RAM}  CPU={this.props.CPU} ></PopupLT>
            </div>

        );
    }
}



export default Laptop;
