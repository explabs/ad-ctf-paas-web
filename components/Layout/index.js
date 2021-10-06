import { useEffect, useState } from 'react';

import {
  NavItem, Col, Container, Nav, NavLink, Row,
} from 'react-bootstrap';

import { userService } from 'services';
import Link from 'next/link';

const Layout = ({ children }) => {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    setTeam(userService.team);
  }, []);

  function onLogout() {
    userService.logout();
  }

  return (
    <>
      <header>
        <div className="container-xl d-lg-flex flex-items-center p-responsive">
          <div className="d-flex justify-content-between align-items-center">
            <Link href="/">
              <span className="logo me-5">
                CTF
              </span>
            </Link>
          </div>
          <div className="header-menu position-lg-relative d-lg-flex justify-content-between align-items-center flex-auto">
            {team ? (
              <Nav className="mt-0 px-3 px-lg-0 mb-5 mb-lg-0">
                <NavItem className="d-flex align-items-center">
                  <NavLink active href="/">
                    Главная
                  </NavLink>
                </NavItem>
                <NavItem className="d-flex align-items-center">
                  <NavLink href="flag">
                    Сдать флаг
                  </NavLink>
                </NavItem>
                <NavItem className="d-flex align-items-center">
                  <NavLink href="dashboard">
                    Команды
                  </NavLink>
                </NavItem>
              </Nav>
            ) : <Nav className="mt-0 px-3 px-lg-0 mb-5 mb-lg-0" />}
            {team
              ? (
                <a href="/" onClick={onLogout} passHref>Выйти</a>
              ) : (
                <div className="d-lg-flex align-items-center px-3 px-lg-0 text-center text-lg-left">
                  <div className="position-relative me-4 mb-4 mb-lg-0 d-inline-block">
                    <a href="/login" className="header__menu-link login flex-shrink-0 no-underline">
                      Войти
                    </a>
                  </div>
                  <a href="/signup" className="header__menu-link signup flex-shrink-0 d-inline-block no-underline rounded px-3 py-1">
                    Зарегистироваться
                  </a>
                </div>
              )}
          </div>
        </div>
      </header>

      <div className="wrapper d-flex justify-content-center align-items-center">
        <Container className="h-100">
          {children}
        </Container>
      </div>

      <footer className="mt-auto">
        <Container>
          <Row>
            <small className="d-flex justify-content-center align-items-center m-0">
              Made with love by
              {' '}
              <a href="https://vk.com/lu.perfect">@lu.perfect</a>
            </small>
          </Row>
        </Container>
      </footer>

      <style jsx>
        {`

        .logo {
          display: flex;
          font-family: Tomorrow, sans-serif;
          align-items: center;
          height: 100%;
          font-weight: 800;
          font-size: 20px;
          color: #f9f9f9;
          cursor: pointer;     
        }
        
        .header-menu {
          width: 100%;
          overflow: visible;
          background-color: transparent;
          box-shadow: none;
        }
        
        header {
          display: flex;
          align-items: center;
          height: 72px; width: 100%;
          background-color: #1f1f1f; color: rgba(255, 255, 255, 0.87);
          font-weight: 500;
          font-size: 1rem;
          font-family: Montserrat, serif;
          border-bottom: 1px solid rgba(#39abe7, 0.8);
        
          :global(.nav-link) {
            padding: 0;
            color: rgba(255, 255, 255, .5);
            background-color: transparent;
            border-bottom: 1px solid transparent;
          }
          
          :global(.nav-link:hover),
          :global(.nav-link:focus) {
            border-bottom-color: rgba(255, 255, 255, .25);
          }
        
          :global(.nav-item) + :global(.nav-item)  {
            margin-left: 1.5rem;
          }
          
          .header__menu-link {    
            color: #fff;
            text-decoration: none !important;
            white-space: nowrap;
            background: transparent;
            transition: all 0.15s ease-in-out;
            &.login:hover {
              color: rgba(255,255,255,0.6);
            }
            &.signup {
              border: 1px dashed rgba(255,255,255,0.6);
              &:hover {
                color: #39abe7;
                border-color:  #39abe7;
              }
            }
          }
          
          .sign-in-btn {
          
          }
          .sign-up-btn {
          
          }
        }
        
        .wrapper {
          width: 100%; height: 100%; min-height: calc(100vh - 72px - 50px);
          background-color: #121212; color: rgba(255, 255, 255, 0.87);
        }
        
        footer {
          display: flex;
          align-items: center;
          height: 50px; width: 100%;
          background-color: #1f1f1f; color: rgba(255, 255, 255, 0.6);
          font-family: monospace;
          
          a {
            color: rgba(255, 255, 255, 0.82);
            text-decoration: none;
            margin-left: 10px;
            transition: all 0.2s ease-in-out;
            border-bottom: 1px solid transparent;
            &:hover {
              color: white;
              border-color: white;
            }
          }
        } 
      `}
      </style>
    </>
  );
};

export default Layout;
