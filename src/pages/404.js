import React from "react";
import NotFoundGif from "../assets/images/404.gif";

const NotFoundPage = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>404</h1>
            <img src={NotFoundGif} alt="Not Found"/>
        </div>
    );
}
 
export default NotFoundPage;