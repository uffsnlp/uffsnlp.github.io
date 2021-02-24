import React, { Component } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import MainLayout from "../layouts/MainLayout";

export default class IndexPage extends Component {
    render () {
        return (
            <>
                <MainLayout>
                    <Navbar />
                    <Header 
                        title="Grupo de Estudos em NLP - UFFS"
                        subtitle=""
                    />
                    <About />
                </MainLayout>
                <Footer />
            </>
        )
    }
}
