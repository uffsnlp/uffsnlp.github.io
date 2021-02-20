import React, { Component } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import About from "../components/About";

export default class IndexPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Header 
                    title="Grupo de Estudos em NLP - UFFS"
                    subtitle=""
                />
                <About />
            </div>
        )
    }
}
