import React, { Component } from "react"

export default class IndexPage extends Component {
    render() {
        return (
            <div className="container p-5">
                <button className={
                    "cursor-pointer" +
                    " bg-red-500" + 
                    " p-2" + 
                    " px-4" +
                    " shadow-sm" +
                    " hover:shadow-lg" +
                    " hover:bg-red-600" +
                    " rounded-sm" +
                    " transition-all"}>Click Me</button>
            </div>
        )
    }
}
