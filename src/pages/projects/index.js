import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import "./styles.css";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div class="diagonal-hero-bg">
          <div class="stars">
            <div class="small"></div>
            <div class="medium"></div>
            <div class="big"></div>
          </div>
        </div>
        <header>
          <div className="links">
            <Link to="/">Sobre</Link>
            <Link className="active" to="/projects">
              Projetos
            </Link>
            <Link to="/contact">Contato</Link>
          </div>
        </header>
        <p className="txtTopGit">
          Todos os projetos possuem um link ao seu respectivo repositório no
          GitHub
        </p>
        <div className="containerCards">
          <Link to="/Bethehero">
            <div className="card">
              <div className="imgCard bg1"></div>
              <div className="cardFooter">
                <h1>Be The Hero</h1>
                <div className="cardIcons">
                  <FaReact size={28} color="#17B7E8" />
                  <FaNodeJs size={28} color="#689F63" />
                </div>
                <p>Projeto desenvolvido durante a semana OmniStack 11.</p>
              </div>
            </div>
          </Link>

          <Link to="/RsClone">
            <div className="card">
              <div className="imgCard bg6"></div>
              <div className="cardFooter">
                <h1>SkyLab</h1>
                <div className="cardIcons">
                  <FaReact size={28} color="#17B7E8" />
                </div>
                <p>Clone do site SkyLab da RocketSeat.</p>
              </div>
            </div>
          </Link>

          <Link to="/AirCnC">
            <div className="card">
              <div className="imgCard bg3"></div>
              <div className="cardFooter">
                <h1>AirCnC</h1>
                <div className="cardIcons">
                  <FaReact size={28} color="#17B7E8" />
                  <FaNodeJs size={28} color="#689F63" />
                </div>
                <p>Projeto desenvolvido durante a semana OmniStack 09.</p>
              </div>
            </div>
          </Link>

          <Link to="/repositorios">
            <div className="card">
              <div className="imgCard bg9"></div>
              <div className="cardFooter">
                <h1>Listar Respositórios</h1>
                <div className="cardIcons">
                  <FaReact size={28} color="#17B7E8" />
                </div>
                <p>Página que lista repositórios do github.</p>
              </div>
            </div>
          </Link>

          <Link to="/Academia">
            <div className="card">
              <div className="imgCard bg5"></div>
              <div className="cardFooter">
                <h1>Controle Academia</h1>
                <div className="cardIcons">
                  <AiOutlineHtml5 size={28} color="#FFB843" />
                </div>
                <p>Projeto desenvolvido durante o curso LaunchBase.</p>
              </div>
            </div>
          </Link>

          <Link to="/ProductHunt">
            <div className="card">
              <div className="imgCard bg4"></div>
              <div className="cardFooter">
                <h1>ProductHunt Clone</h1>
                <div className="cardIcons">
                  <FaReact size={28} color="#17B7E8" />
                  <FaNodeJs size={28} color="#689F63" />
                </div>
                <p>
                  Clone do ProductHunt, idealizado no curso básico RocketSeat.
                </p>
              </div>
            </div>
          </Link>

          <Link to="/nbClone">
            <div className="card">
              <div className="imgCard bg7"></div>
              <div className="cardFooter">
                <h1>Nubank</h1>
                <div className="cardIcons">
                  <FaReact size={28} color="#7259C1" />
                </div>
                <p>Clone tela inicial do aplicativo Nubank.</p>
              </div>
            </div>
          </Link>

          <Link to="/templatePage">
            <div className="card">
              <div className="imgCard bg8"></div>
              <div className="cardFooter">
                <h1>Template App</h1>
                <div className="cardIcons">
                  <FaReact size={28} color="#7259C1" />
                </div>
                <p>Temaplate de aplicativo React-Native.</p>
              </div>
            </div>
          </Link>

          <Link to="/Airbnb">
            <div className="card">
              <div className="imgCard bg2"></div>
              <div className="cardFooter">
                <h1>Airbnb</h1>
                <div className="cardIcons">
                  <AiOutlineHtml5 size={28} color="#FFB843" />
                </div>
                <p>Clone página inicial do Airbnb.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
