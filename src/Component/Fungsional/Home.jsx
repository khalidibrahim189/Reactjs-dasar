import React, { Component } from 'react'
import Produk from '../Class/Produk';
// import Blog from './Blog'


class Home extends Component {
    render() {
        return (
            <div>
                <Produk
                    nama="Mackbook Pro 2021"
                    stock="15"
                    harga="12300000"
                />
                <Produk
                    nama="Mackbook Pro 2022"
                    stock="10"
                    harga="300000"
                />
                <Produk
                    nama="Mackbook Pro 2023"
                    stock="12"
                    harga="3700000"
                />
                <Produk
                    nama="Mackbook Pro 2020"
                    stock="9"
                    harga="23000000"
                />
            </div>
        )
    }
}
export default Home;