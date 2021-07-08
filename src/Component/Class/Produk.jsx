import React, { Component } from 'react';

import './CSS/Produk.css'

class Produk extends Component {
    constructor(props){
        super(props)
        this.state = {
            stock: this.props.stock,
            sub : 'Beli',
            status : 'Tersedia',
            disabled: false
        }
    }

    ButtonBeli = () => {
        this.setState({
            stock : this.state.stock -1
        })

        if(this.state.stock === 1){
            this.setState({
                status: 'Habis',
                disabled: true
            })
        }
    }


    render() {
        return (
            <div className="box-stock">
                <h6 className="text-center"><b>{this.props.nama}</b></h6>
                <img src="https://cdn.eraspace.com/pub/media/catalog/product/m/a/macbook-pro-16-inch-silver-2_1_2.jpg" alt="" className="img-fluid" />
                <p><b>Rp.{this.props.harga}</b></p>
                <p><b>{this.state.stock}</b></p>
                <button className="btn-klik" onClick={this.ButtonBeli} disabled={this.state.disabled} >Pesan</button>
                <p className="mt-2">{this.state.status}</p>
            </div>
        )
    }
}
export default Produk;