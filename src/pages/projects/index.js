import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import "./styles.css";

//import { Link } from "react-router-dom";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="links">
            <Link className="projItem" to="/">
              Sobre
            </Link>
            <Link className="active" to="/projects">
              Projetos
            </Link>
            <Link className="projItem" to="/">
              Contato
            </Link>
          </div>
        </header>

        <div className="containerCards">
          <Link to="/BeTheHero">
            <div className="card">
              <div className="imgCard bg1"></div>
              <div className="cardFooter">
                <h1>Be The Hero</h1>
                <div className="cardIcons">
                  <FaReact size={28} color="#17B7E8" />
                  <FaNodeJs size={28} color="#689F63" />
                </div>
                <p>Projeto desenvolvido durante a semana OmniStack 11</p>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className="card">
              <div className="imgCard bg2"></div>
              <div className="cardFooter">
                <h1>Airbnb</h1>
                <div className="cardIcons">
                  <AiOutlineHtml5 size={28} color="#FFB843" />
                </div>
                <p>Clone página inicial do Airbnb</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}