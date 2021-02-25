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
                        subtitle="Bem-vindo ao site grupo de estudos sobre Processamento de
                            Linguagem Natural, ficamos contentes em te-lô aqui. Nesse site você
                            irá encontrar informações relativas ao cronograma do grupo, contato,
                            bibliografia, resumo dos encontros, e notícias quentes sobre a área que serão
                            eventualmente postadas em nosso blog."
                    />
                    <About />
                </MainLayout>
                <Footer />
            </>
        )
    }
}
