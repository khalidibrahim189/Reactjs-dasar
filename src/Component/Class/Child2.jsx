import React, { Component } from 'react'
import GrandChild from './GrandChild'

class Child2 extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">
                                <h2>Child Component 2 </h2>
                            </div>

                            <div className="card-body">
                                <GrandChild 
                                data={this.props.stock}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Child2;