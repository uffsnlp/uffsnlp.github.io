import React, { Component } from "react";
import HeaderImg from "../../assets/images/undraw_teacher_35j2.svg";
import "./header.scss";
import "../../assets/scss/components/button.scss";

class Header extends Component {
    render () {
        let { children } = this.props;

        return (
            <header className="header">
                <div className="container">
                    <div className="row header__content">
                        <div className="col-md-6">
                            <h1 
                                className="header__title"
                                data-sal="slide-down"
                                data-sal-duration="400"
                            >
                                {this.props.title}
                            </h1>

                            <h3
                                className="header__subtitle"
                                data-sal="slide-down"
                                data-sal-duration="400"
                                data-sal-delay="200"
                            >
                                {this.props.subtitle}
                            </h3>

                            <div className="header__children">
                                {children}
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img 
                                src={this.props.headerImage || HeaderImg}
                                alt="Grupo de Estudos em NLP - UFFS"
                                className="header__image"
                                data-sal="zoom-out"
                                data-sal-duration="400"
                                data-sal-delay="400"
                            />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default Header;