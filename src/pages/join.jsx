import React, { Component } from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MainLayout from "../layouts/MainLayout";
import JoinHeaderImg from "../assets/images/undraw_social_friends_nsbv.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'


export default class JoinPage extends Component {
    render () {
        return (
            <>
                <MainLayout>
                    <Navbar />
                    <div className="mt-sm-7 mb-sm-auto mb-5">
                        <Header 
                            title="Quero Participar do Grupo"
                            subtitle="Interessou-se pela área à ponto de querer
                            participar do nosso grupo de estudos? Ficamos sempre
                            felizes em receber novos membros :)"
                            headerImage={JoinHeaderImg}
                        >
                            <a
                                href="https://forms.gle/MVkbTCwdMbRjeDb36"
                                className="btn btn--orange"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Participar
                                <FontAwesomeIcon
                                    icon={faCaretRight}
                                    className="btn__icon"
                                />
                            </a>
                        </Header>
                    </div>
                </MainLayout>
                <Footer />
            </>
        )
    }
}
