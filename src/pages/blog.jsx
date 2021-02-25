import React, { Component } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainLayout from "../layouts/MainLayout";
import NewImage from "../assets/images/undraw_newspaper_k72w.svg";

export default class IndexPage extends Component {
    render() {
        return (
            <div className="mt-sm-7 mt-5">
                <MainLayout>
                    <Navbar />
                    <Header 
                        title="Blog de notícias do grupo"
                        subtitle="Aqui você irá encontrar sínteses dos encontros semanais,
                            produções do grupo de estudo (resenhas, aplicações, apresentações) e
                            notícias recentes da área de NLP."
                        headerImage={NewImage}
                    />
                </MainLayout>
                <Footer />
            </div>
        )
    }
}
