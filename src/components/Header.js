import React, { useState, useEffect } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { AUTH_TOKEN } from '../constants';
import { animateScroll } from 'react-scroll';
import '../styles/header.css';

const Header = ({ upOffset = 0, downOffset = 50 }) => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < upOffset);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, upOffset]);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className={`scroll-navbar ${visible ? 'scroll-navbar--visible' : 'scroll-navbar--hidden'}`}
    >
      <Link to="/" onClick={scrollToTop}>
        <Navbar.Brand>PeliculasList</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" onClick={scrollToTop} className="nav-link">
            Inicio
          </Link>
          <Link to="/create" className="nav-link">
            Crear
          </Link>
          <Link
            to="/crearImg"
            className='nav-link'>
              crearIMG
          </Link>
          <Link
            to="/davinchi"
            className='nav-link'>
              Davinci
          </Link>

          <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="nav-link"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
          >
            logout
          </div>
        ) : (
          <Link
            to="/login"
            className="nav-link">
            Login
          </Link>
        )}
      </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;