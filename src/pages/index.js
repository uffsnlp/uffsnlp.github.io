import React, { Component } from "react"

export default class IndexPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8" style={{backgroundColor: "red"}}>a</div>
                    <div className="col-sm-4" style={{backgroundColor: "blue"}}>a</div>
                </div>

                <button>Click Me</button>
                <button>Click Me</button>
            </div>
        )
    }
}
