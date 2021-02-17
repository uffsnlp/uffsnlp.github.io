import React, { Component } from "react";
import "./about.scss";
import Justification from "../../assets/images/undraw_Questions_re_1fy7.svg";
import Goals from "../../assets/images/undraw_Goals_re_lu76.svg";
import ResearchSubjects from "../../assets/images/undraw_online_articles_79ff.svg";
import Methods from "../../assets/images/undraw_processing_qj6a.svg";

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" >
                            <h2 
                                className="title" 
                                data-sal="slide-right" 
                                data-sal-duration="400"
                            >
                                Justificativa
                            </h2>
                            <div
                                data-sal="slide-right" 
                                data-sal-duration="400"
                                data-sal-delay="200"
                            >
                                <p>
                                    A carência de disciplinas que abrangem áreas emergentes
                                    da computação é evidente em nosso curso de graduação,
                                    em consequência disso os estudantes tendem a ater-se
                                    às áreas a tempo consolidadas, o que de certo modo
                                    limita o horizonte de pesquisas científicas a serem
                                    exploradas pelo curso.
                                </p>
                                <p>
                                    Outro ponto importante é o crescente avanço e popularidade
                                    que o ramo de Deep Learning tem ganho o que contribuiu com
                                    o desenvolvimento da área de Processamento de Linguagem
                                    Natural o que consequentemente tornou-a muito atrativa
                                    da perspectiva da indústria.
                                </p>
                                <div className="about__img-container">
                                    <img 
                                        src={Justification}
                                        className="about__img" 
                                        alt="Justification" 
                                        />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h2 
                                className="title" 
                                data-sal="slide-left" 
                                data-sal-duration="400"
                            >
                                Objetivos
                            </h2>

                            <div
                                data-sal="slide-left" 
                                data-sal-duration="400"
                                data-sal-delay="200"
                            >
                                <ul className="goals">
                                    <li>
                                        Compreensão dos conceitos, ferramentas e tecnologias
                                        estado-da-arte
                                    </li>
                                    <li>
                                        Desenvolver pequenas aplicações que garantam o exercício
                                        dos conceitos estudados
                                    </li>
                                    <li>
                                        Divulgar a área de Processamento de Linguagem Natural na
                                        instituição
                                    </li>
                                    <li>
                                        Promover oficinas
                                    </li>
                                    <li>
                                        Capacitar os estudantes nesse ramo
                                    </li>
                                </ul>
                                <div className="about__img-container">
                                    <img 
                                        src={Goals} 
                                        className="about__img" 
                                        alt="Goals" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <h2 
                                className="title" 
                                data-sal="slide-right" 
                                data-sal-duration="400"
                            >
                                Métodos
                            </h2>

                            <div
                                data-sal="slide-right" 
                                data-sal-duration="400"
                                data-sal-delay="200"
                            >
                                <ul className="methods">
                                    <li>
                                        Abordagem teórica dos assuntos e técnicas estudadas
                                    </li>
                                    <li>
                                        Atividades práticas como <i> coding dojos</i> e problemas
                                        do <a href="https://kaggle.com" className="kaggle"
                                            target="_blank" rel="noopener noreferrer">Kaggle</a>
                                    </li>
                                    <li>
                                        Produção de resenhas e revisões bibliográficas
                                    </li>
                                </ul>
                                <div className="about__img-container">
                                    <img src={Methods} className="about__img" alt="Methods" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <h2
                                className="title" 
                                data-sal="slide-left" 
                                data-sal-duration="400"
                            >
                                Linhas de Pesquisa
                            </h2>
                            
                            <div
                                data-sal="slide-left" 
                                data-sal-duration="400"
                                data-sal-delay="200"
                            >
                                <ul className="subjects">
                                    <li>
                                        Processamento de Linguagem Natural
                                    </li>
                                    <li>
                                        Machine Learning
                                    </li>
                                    <li>
                                        Deep Learning
                                    </li>
                                </ul>
                                <div className="about__img-container">
                                    <img 
                                        src={ResearchSubjects}
                                        className="about__img"
                                        alt="Research Subjects"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;