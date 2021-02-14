import React, { Component } from "react"
import Header from "../components/Header"

export default class IndexPage extends Component {
    render() {
        return (
            <div>
                <Header>
                    <p>Laboris fugiat labore Lorem aute adipisicing non sit duis eiusmod excepteur dolore fugiat sit. Aute deserunt sunt laboris velit aliquip voluptate nostrud esse qui laborum culpa. Sint nisi veniam id consectetur id laboris culpa nisi. Incididunt do ea aliquip est consectetur culpa aliquip incididunt adipisicing. Sunt elit minim mollit sunt cillum fugiat voluptate minim.</p>
                </Header>
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
