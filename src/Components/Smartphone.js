import React, { Component } from 'react';
import PopupSP from './popupSP';
import Swal from 'sweetalert2'

class Smartphone extends Component {

    handleCart=()=>{
        Swal.fire({
            title: 'Bạn chọn mua sản phẩm này ? ',
            text: "Sản phẩm sẽ được đưa tới giỏ hàng!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Done!',
                'Sản phẩm đã được chọn.',
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
                            <a   className="btn btn-primary text-white" data-toggle="modal" data-target={`#${this.props.id}`} style={{cursor:'pointer'}}>Detail</a>
                            <a   className="btn btn-danger text-white" onClick={this.handleCart} style={{cursor:'pointer'}}>Cart</a>
                        </div>
                    </div>
                </div>
                <PopupSP id={this.props.id}  Name = {this.props.Name} Price = {this.props.Price} Desc={this.props.Desc} Url={this.props.img}></PopupSP>
            </div>

        );
    }
}



export default Smartphone;
