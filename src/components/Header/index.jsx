import React, { Component } from 'react';
import "./header.scss";
import HeaderImg from "../../assets/images/undraw_teacher_35j2.svg";

class Header extends Component {
    render() { 
        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 
                                className="header__title"
                                data-sal="slide-down"
                                data-sal-duration="400"
                            >
                                { this.props.title }
                            </h1>

                            <h3
                                className="header__subtitle"
                                data-sal="slide-down"
                                data-sal-duration="400"
                                data-sal-delay="200"
                            >
                                { this.props.subtitle }
                            </h3>
                        </div>

                        <div className="col-md-6">
                            <img 
                                src={HeaderImg}
                                alt="Grupo de Estudos em NLP - UFFS"
                                className="header__image"
                                data-sal="zoom-out"
                                data-sal-duration="400"
                                data-sal-delay="400"
                            />
                        </div>
                    </div>
                </div>

                {/* <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="shadow1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop
                                offset="0%"
                                style={{
                                    stopColor: "rgba(255,255,255,0.50)",
                                    stopOpacity: 1,
                                }}
                            />
                            <stop 
                                offset="100%"
                                style={{
                                    stopColor: "rgba(255, 174, 166, 0.45)",
                                    stopOpacity: 1,
                                }}
                            />
                        </linearGradient>
                    </defs>

                    <polygon fill="url(#shadow1)" points="0,60 100,0 100,100 0,100"/>
                </svg>

                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="shadow2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop 
                                offset="0%"
                                style={{
                                    stopColor: "rgba(255, 174, 166, 0.45)",
                                    stopOpacity: 1,
                                }}
                            />
                            <stop
                                offset="100%"
                                style={{
                                    stopColor: "rgba(255, 255, 255, 0.50)",
                                    stopOpacity: 1,
                                }}
                            />
                        </linearGradient>
                    </defs>

                    <polygon fill="url(#shadow2)" points="0,80 100,20 100,100 0,100"/>
                </svg>

                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <polygon fill="white" points="0,100 100,40 100,100 0,100"/>
                </svg> */}
            </header>
        );
    }
}
 
export default Header;