import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { AUTH_TOKEN } from '../constants';
import { animateScroll } from 'react-scroll';
import '../styles/header.css';

import { useTranslation } from 'react-i18next';
import LanguageSelect from './languageSelect';

const Header = ({ upOffset = 0 }) => {
  const { t } = useTranslation();
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
        <Navbar.Brand>{t("movie_lists")}</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">

          <Link to="/" onClick={scrollToTop} className="nav-link">
            {t('home')}
          </Link>

          <Link to="/create" className="nav-link">
            {t('create')}
          </Link>

          <Link
            to="/crearImg"
            className='nav-link'>
            {t('create_image')}
          </Link>

          <Link
            to="/davinchi"
            className='nav-link'>
            Davinci
          </Link>

          <Link
            to="/perfil"
            className='nav-link'>
            Perfil
          </Link>
          <Link
            to="/search"
            className='nav-link'>
            Search
          </Link>

          <Link
            to="/selectModel"
            className='nav-link'>
              Select Model
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
                {t('logout')}
              </div>
            ) : (
              <Link
                to="/login"
                className="nav-link">
                  {t('login')}
              </Link>
            )}
          </div>

          <div className="flex flex-fixed">
            <div className="ml1 pointer white">
              {t('select_language')}
            </div>
            <div className="ml1 pointer black"> : </div>

            <div>
              <LanguageSelect
                className="ml1 pointer black"
              />
            </div>
          </div>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
