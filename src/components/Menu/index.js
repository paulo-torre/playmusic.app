import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLinkMusic from './components/ButtonLink/Music';
import ButtonLinkCategoria from './components/ButtonLink/Categoria';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
       <img className="Logo" src={Logo} alt="PlayMusic logo" />
      </Link>

      <ButtonLinkMusic as={Link} className="ButtonLinkMusic" href="/cadastro/musica">
        Nova Música
      </ButtonLinkMusic>

      <ButtonLinkCategoria as={Link} className="ButtonLinkCategoria" href="/cadastro/categoria">
        Nova Categoria
      </ButtonLinkCategoria>
    </nav>
  );
}

export default Menu;