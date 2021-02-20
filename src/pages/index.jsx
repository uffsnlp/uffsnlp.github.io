import React, { Component } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Favicon from "../assets/images/uffsnlp/icon.svg";

export default class IndexPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>UFFS · NLP</title>
                    <link rel="canonical" href="https://uffsnlp.github.io" />
                    <link rel="shortcut icon" type="image/jpg" href={Favicon} />
                </Helmet>
                <Navbar />
                <Header 
                    title="Grupo de Estudos em NLP - UFFS"
                    subtitle=""
                />
                <About />
                <Footer />
            </div>
        )
    }
}
