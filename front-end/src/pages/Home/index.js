import React from "react";


import "./styles.css";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <main>
          <h1> Sistema de Cadastro de Clientes e Produtos.</h1>
          <p>
            Largue as planilhas Excel antigonas e defazadas.
          </p>
        <Link to="/products">
          <strong> Comece a usar </strong>
        </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
