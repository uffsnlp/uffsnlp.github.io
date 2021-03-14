import React, { Component } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainLayout from "../layouts/MainLayout";
import StudyHeaderImg from "../assets/images/undraw_studying_s3l7.svg";
import StudyMaterialData from "../data/study-material.json";
import Card from "../components/Card";


export default class ReadingsPage extends Component {
    render () {
        return (
            <>
                <MainLayout>
                    <Navbar />
                    <div className="mt-sm-7 mb-sm-auto mb-5">
                        <Header 
                            title="Material de Estudo"
                            subtitle="Aqui você encontrará materiais complementares,
                            que lhe possibilitarão um entendimento mais aprofundado
                            dos conceitos vistos durante os encontros."
                            headerImage={StudyHeaderImg}
                        />
                    </div>

                    <div className="study">
                        <div className="study__books">
                            <h2 className="title">
                                Livros
                            </h2>

                            <div className="row">
                                {StudyMaterialData.books.map((data) => {
                                    return <div className="col-sm-6 col-md-4 p-3">
                                        <Card
                                            title={data.title}
                                            content={data.description}
                                        ></Card>
                                    </div>
                                })}
                            </div>
                        </div>
                    
                    </div>


                </MainLayout>
                <Footer />
            </>
        )
    }
}
