import React, { Component } from "react";
import "./footer.scss";
import Email from "../../assets/images/mail.svg";
import Telegram from "../../assets/images/telegram.svg";

class Footer extends Component {
    render () {
        return(
            <footer className="footer">
                <div className="row">
                    <div className="col-md-3">
                        <p className="pt-3">
                            Build
                            with <svg className="footer__heart" viewBox="0 0 32 29.6">
                                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                                c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                            </svg> by <a href="https://github.com/ccuffs" className="footer__link" target="_blank" rel="noopener noreferrer">
                                CCUFFS
                            </a>
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <p className="footer__credits pt-2">
                            As imagens utilizadas nesse
                            site foram criadas por vários designers que
                            contribuem com o <a href="https://undraw.co" className="footer__link" target="_blank" rel="noopener noreferrer">
                                unDraw.
                            </a>
                        </p>
                        <p className="footer__credits">
                            Icons made
                            by <a href="https://www.flaticon.com/authors/pixel-perfect" className="footer__link" title="Pixel perfect">
                                Pixel perfect </a>
                            from <a href="https://www.flaticon.com/" className="footer__link" title="Flaticon">
                                www.flaticon.com
                            </a>
                        </p>
                    </div>
                    <div className="col-md-3">
                        <div className="p-1 right">
                            <a href="https://github.com/uffsnlp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1"
                            >
                                <svg className="footer__img" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true">
                                    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                                    </path>
                                </svg>
                            </a>
                            
                            <a className="p-1" href="mailto:nlp.cc.uffs@gmail.com">
                                <img src={Email} alt="Email" className="footer__img"/>
                            </a>

                            <a href="https://t.me/joinchat/RKzEpwTkvZpENtGE"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1"
                            >
                                <img src={Telegram} alt="Telegram" className="footer__img"/>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;