import React from 'react';

import { NavLink } from 'react-router-dom';
import './styles.css'

const Header = () => (
  <div className="header-container">
    <header>
      <nav>
        <NavLink activeStyle={{borderBottom:"1px solid #fff"}} to="/products">Home</NavLink>
        <NavLink activeStyle={{borderBottom:"1px solid #fff"}} to="/create-client">Cadastro de Clientes</NavLink>
        <NavLink activeStyle={{borderBottom:"1px solid #fff"}} to="/create-product">Cadastro de Produtos</NavLink>
      </nav>
    </header>
  </div>
);

export default Header;