import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLinkMusic from './components/ButtonLink/Music';
import ButtonLinkCategoria from './components/ButtonLink/Categoria';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
       <img className="Logo" src={Logo} alt="PlayMusic logo" />
      </a>

      <ButtonLinkMusic as="a" className="ButtonLinkMusic" href="/">
        Nova Música
      </ButtonLinkMusic>

      <ButtonLinkCategoria as="a" className="ButtonLinkCategoria" href="/">
        Nova Categoria
      </ButtonLinkCategoria>
    </nav>
  );
}

export default Menu;