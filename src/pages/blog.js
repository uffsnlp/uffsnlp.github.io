import React, { Component } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import Favicon from "../assets/images/uffsnlp/icon.svg";
import NewImage from "../assets/images/undraw_newspaper_k72w.svg";

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
                    title="Blog de notícias do grupo"
                    subtitle="Aqui você irá encontrar sínteses dos encontros semanais,
                    produções do grupo de estudo (resenhas, aplicações, apresentações) e
                    notícias recentes da área de NLP."
                    headerImage={NewImage}
                />
                <Footer />
            </div>
        )
    }
}
