import React, { Component } from "react";
import Navbar from "../components/Navbar";
import MainLayout from "../layouts/MainLayout";
import Footer from "../components/Footer";
import { Timeline } from "../components/Timeline";

class TimelinePage extends Component {
    render () {
        return (
            <>
                <MainLayout>
                    <Navbar />

                    <div className="p-5"></div>

                    <h1 className="title">Cronograma do Grupo de Estudos</h1>

                    <div className="p-4"></div>


                    <div className="d-sm-block d-none">
                        <Timeline>
                        </Timeline>
                    </div>
                </MainLayout>
                <Footer />
            </>
        );
    }
}

export default TimelinePage;