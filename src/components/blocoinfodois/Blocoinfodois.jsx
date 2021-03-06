import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./Blocoinfodois.css";

import monitor from "../../assets/img/blocoinfo/monitor.svg";
import imgcanto from "../../assets/img/blocoinfo/imgcanto.svg";
import circles from "../../assets/img/blocoinfo/circles.svg";
import code from "../../assets/img/blocoinfo/code.svg";
import seta from "../../assets/img/blocoinfo/seta.svg";
import doar from "../../assets/img/blocoinfo/doar.svg";

export default class BlocoInfoDois extends Component {
  render() {
    return (
      <>
        <div className="blocodois">
          {/* Contem as imagens que ficam no fundo do componente, atras do conteudo principal  */}
          <div className="container-fundo">
            <div className="fundo-sombra">
              <img src={monitor} alt="fundo" />
            </div>

            <div className="imgdecorativo">
              <img src={imgcanto} alt=" fundo" />
            </div>

            <div className="quadrado"></div>

            <div className="circulo">
              <img src={circles} alt="Circulo fundo" />
            </div>
          </div>

          {/* Contem o conteudo principal com os textos  */}
          <div className="container-texto">
            <div className="textotitulo">
              <h1>
                <FormattedMessage id="tituloumbldois" />
                <br />
                <FormattedMessage id="titulodoisbldois" />
              </h1>
              <p>
                <FormattedMessage id="text1" />
                <br />
                <br />
                <FormattedMessage id="text2" />

              </p>

              <div className="botao">
                <a
                  className="botao-h1"
                  href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="pessoasdoando" />
                </a>
              </div>
            </div>

            <div className="container-qr">
              <div className="container-qr-qrcode">
                <div className="qrcode">
                  <a
                    href="https://e.anna.center/?v0Roey"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={code} className="qrcode-img" alt="QR code" />{" "}
                  </a>
                </div>

                <div className="seta">
                  <a
                    href="https://e.anna.center/?v0Roey"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>
                      <FormattedMessage id="textcode" />
                      <br />
                      <FormattedMessage id="textcodeum" />
                      <br />
                      <FormattedMessage id="textcodedois" />
                      <img src={seta} alt="Seta para direita" />
                    </p>
                  </a>
                </div>
              </div>

              <div className="textbaixo">
                <p>
                  <FormattedMessage id="textinferior" />
                  <br />
                  <FormattedMessage id="textinferiorum" />{" "}
                  <a
                    className="link-acessando-aqui"
                    href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=0"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="textinferiordois">
                      <FormattedMessage id="textinferiordois" />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="container-final">
            <div className="doar">
              <img src={doar} alt="doar" />
            </div>
            <div className="textoemail">
              <p>
                <FormattedMessage id="textemail1" />
               {" "}
                <a
                  className="email"
                  href="malito:abcr@captadores.org.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FormattedMessage id="textemail2" />
                </a>
                <br />
                <FormattedMessage id="textemail3" />
      
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
