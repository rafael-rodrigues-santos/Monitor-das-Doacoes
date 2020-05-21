import React, { Component } from "react";
import Footercss from "./Footer.css"
import abcr from '../../assets/img/footer/abcr.png';
import promocao from '../../assets/img/footer/movimento-por-uma-cultura-de-doação.png';
import qrcode from '../../assets/img/footer/qr-code-footer.png';
import twitter from '../../assets/img/footer/twitter.svg';
import instagram from '../../assets/img/footer/instagram.svg';
import facebook from '../../assets/img/footer/facebook.svg';
import linkedin from '../../assets/img/footer/linkedin.svg';
import youtube from '../../assets/img/footer/youtube.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className="container">
                <div className="footer">
                    <div className="footer-first">
                        <div className="footer-first-promocao">
                            <div className="footer-title">
                                <h3>Promoção</h3>
                            </div>
                            <div className="footer-img-promocao">
                                <img src={(promocao)}/>
                            </div>
                        </div>

                        <div className="footer-first-realizacao">
                            <div className="footer-title">
                                <h3>Realização</h3>
                            </div>
                            <div className="footer-img-realizacao">
                                <img src={(abcr)} />
                            </div>
                        </div>

                        <div className="footer-first-imprenssa">
                            <div className="footer-title">
                                <h3>Imprensa ABCR</h3>
                            </div>
                            <div className="footer-description">
                                <p> <span className="footer-description-name">Ana Moretto</span> </p>
                                <a href="mailto:anamoretto@4pressnews.com.br"> <p> anamoretto@4pressnews.com.br </p></a>
                                <p> Tel: (11) 5096-0439 </p>
                                <p> Cel: (11) 97300-8584 </p>
                            </div>
                        </div>
                        <div className="footer-first-qrcode">
                            <div className="footer-img-qrcode">
                                <img src={(qrcode)}></img>
                            </div>
                            <div className="footer-link">
                                <a href="https://www.paypal.com/donate/?token=1bQivV0Os67wJQiuN9aFb59wqVx0KPQ44Z_CG-3nk-qiwMF8EmdXAyvQUlIEyxMp8DwMYG&country.x=BR&locale.x=BR" target="_blank">
                                    <p> Clique e doe para a ABCR desenvolver ainda mais o Monitor das Doações </p>
                                </a>
                            </div>
                        </div>
                    </div>
            
                    <div className="footer-secondary">
                        <div className="footer-secondary-compartilhar">
                            <a href="https://web.facebook.com/sharer.php?u=https%3A%2F%2Fwww.monitordasdoacoes.org.br&_rdc=1&_rdr" target="_blank">
                                <img src={(facebook)} />
                                <h4>Compartilhar</h4>
                            </a>
                        </div>
                        <div className="footer-secondary-sociais">
                            <a href="https://instagram.com/abcrbrasil" target="_blank">
                                <img src={(instagram)} />
                            </a>
                            <a href="https://twitter.com/captacaoabcr" target="_blank">
                                <img src={(twitter)} />
                            </a>
                            <a href="https://facebook.com/ABCRBrasil" target="_blank">
                                <img src={(facebook)} />
                            </a>
                            <a href="" target="_blank">
                                <img src={(linkedin)} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCagSPBomjrVGxYuR3eUFyrQ" target="_blank">
                                <img src={(youtube)} />
                            </a>
                        </div>
                        <div className="footer-secondary-compartilhar">
                            <a href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fstatic.parastorage.com%2Fservices%2Fwix-bolt%2F1.5874.0%2Fnode_modules%2Fwix-santa%2Fstatic%2Fexternal%2Ftwitter.html%3FcompId%3Dcomp-k96bfxus%26href%3Dhttps%253A%252F%252Ftwitter.com%252Fshare%26lang%3Den%26origin%3Dhttps%253A%252F%252Fwww.monitordasdoacoes.org.br%26related%26text%26url%3Dhttp%253A%252F%252Fwww.monitordasdoacoes.org.br%26widgetType%3DTWEET&ref_src=twsrc%5Etfw&tw_p=tweetbutton&url=http%3A%2F%2Fwww.monitordasdoacoes.org.br" target="_blank">
                                <img src={(twitter)} />
                                <h4>Tweet</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
