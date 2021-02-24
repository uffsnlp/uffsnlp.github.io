import React from "react";
import { Helmet } from "react-helmet";
import NotFoundGif from "../assets/images/404.gif";
import MainLayout from "../layouts/MainLayout";
import Navbar from "../components/Navbar";

const NotFoundPage = () => {
    return (
        <MainLayout>
            <Helmet>
                <title>ERROU</title>
            </Helmet>

            <Navbar></Navbar>

            <div className="p-5"></div>

            <div style={{textAlign: "center"}}>
                <h1>404</h1>
                <img src={NotFoundGif} alt="Not Found"/>
            </div>
        </MainLayout>
    );
}
 
export default NotFoundPage;