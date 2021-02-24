import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Favicon from "../../assets/images/uffsnlp/icon.svg";
import "./main-layout.scss";

class MainLayout extends Component {
    render () {
        let { children } = this.props;

        return (
            <div className="container">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>UFFS · NLP</title>
                    <link rel="canonical" href="https://uffsnlp.github.io" />
                    <link rel="shortcut icon" type="image/jpg" href={ Favicon } />
                </Helmet>

                { children }
            </div>
        );
    }
}
 
export default MainLayout;