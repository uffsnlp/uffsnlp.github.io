import React from "react";
import { Helmet } from "react-helmet";
import NotFoundGif from "../assets/images/404.gif";
import MainLayout from "../layouts/MainLayout";

const NotFoundPage = () => {
    return (
        <MainLayout>
            <Helmet>
                <title>ERROU</title>
            </Helmet>

            <div style={{textAlign: "center"}}>
                <h1>404</h1>
                <img src={NotFoundGif} alt="Not Found"/>
            </div>
        </MainLayout>
    );
}
 
export default NotFoundPage;