import React, { Component } from 'react'

class Child1 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    minBeli = 1;
    render() {
        return (
            <div className="container">
                <h3 className="text-center">Child Component</h3>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="body-header bg-primary">
                                <h2 className="text-center">Data Barang</h2>
                            </div>

                            <div className="card-body">
                                <p>Jumlah stok barang saat ini: {this.props.stock}</p>
                                <hr />

                                <button onClick={() => this.props.fungsi(this.minBeli)} className="btn-click">Beli</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Child1;