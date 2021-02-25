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
                    <div className="mt-sm-7 mb-sm-auto mb-5">
                        <Header 
                            title="Grupo de Estudos em NLP - UFFS"
                            subtitle="Bem-vindo ao site grupo de estudos sobre Processamento de
                            Linguagem Natural, ficamos contentes em saber que despertamos seu interesse.
                            Nesse site você irá encontrar informações sobre como participar, cronograma do grupo,
                            bibliografia, resumo dos encontros semanais, e notícias quentes sobre a área
                            que serão eventualmente postadas em nosso blog."
                        />
                    </div>
                    <About />
                </MainLayout>
                <Footer />
            </>
        )
    }
}
