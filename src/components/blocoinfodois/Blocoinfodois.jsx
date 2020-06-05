import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./Blocoinfodois.css";

import monitor from "../../assets/img/blocoinfo/monitor.svg";
import imgcanto from "../../assets/img/blocoinfo/imgcanto.svg";
import circles from "../../assets/img/blocoinfo/circles.svg";
import code from "../../assets/img/blocoinfo/code.svg";
import seta from "../../assets/img/blocoinfo/seta.svg";
import doar from "../../assets/img/blocoinfo/doar.jpg";

export default class BlocoInfoDois extends Component {
  render() {
    return (
      <>
        <div className="blocodois">
          <div className="container-fundo">
            <div className="fundo-sombra">
              <img src={monitor} />
            </div>

            <div className="imgdecorativo">
              <img src={imgcanto} />
            </div>

            <div className="quadrado"></div>

            <div className="circulo">
              <img src={circles} />
            </div>
          </div>

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
                <FormattedMessage id="text2" />
                <br />
                <FormattedMessage id="text3" />
                <br />
                <FormattedMessage id="text4" />
                <br />
                <FormattedMessage id="text5" />
                <br />
                <FormattedMessage id="text6" />
                <br />
                <br />
                <FormattedMessage id="text7" />
                <br />
                <FormattedMessage id="text8" />
                <br />
                <FormattedMessage id="text9" />
                <br />
                <FormattedMessage id="text10" />
              </p>

              <div className="botao">
                <a
                  className="botao-h1"
                  href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=0"
                  target="_blank"
                >
                  <FormattedMessage id="pessoasdoando" />
                </a>
              </div>
            </div>

            <div className="container-qr">
              <div className="container-qr-qrcode">
                <div className="qrcode">
                  <a
                    href="http://bi.anna.center/w5/tdaportalclient.aspx"
                    target="_blank"
                  >
                    <img src={code} className="qrcode-img" />{" "}
                  </a>
                </div>

                <div className="seta">
                  <p>
                    <FormattedMessage id="textcode" />
                    <br />
                    <FormattedMessage id="textcodeum" />
                    <br />
                    <FormattedMessage id="textcodedois" />
                    <img src={seta} />
                  </p>
                </div>
              </div>

              <div className="textbaixo">
                <p>
                  <FormattedMessage id="textinferior" />
                  <br />
                  <FormattedMessage id="textinferiorum" />{" "}
                  <a
                    href="https://docs.google.com/spreadsheets/d/1RA0oP9EBHxpsLGvHTaX2TTYHT2oQHTfNrM8Z40hqVus/edit#gid=0"
                    target="_blank"
                  >
                    <FormattedMessage id="textinferiordois" />
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="container-final">
            <div className="doar">
              <img src={doar} />
            </div>
            <div className="textoemail">
              <p>
                <FormattedMessage id="textemail1" />
                <br />
                <FormattedMessage id="textemail2" />{" "}
                <a
                  className="email"
                  href="malito:abcr@captadores.org.br"
                  target="_blank"
                >
                  <FormattedMessage id="textemail3" />
                </a>
                <br />
                <FormattedMessage id="textemail4" />
                <br />
                <FormattedMessage id="textemail5" />
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
