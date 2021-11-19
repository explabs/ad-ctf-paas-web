import { useEffect, useState } from 'react';
import { Container, styled } from '@mui/material';
import Navbar from './Navbar';
import AuthService from '../../services/auth.service';

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  overflow: 'hidden',
  // backgroundColor: '#1e1e1f',
});

const MainStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
  overflow: 'auto',
  minHeight: 'calc(100vh - 50px)',
  paddingTop: APP_BAR_MOBILE + 24,
}));

const Footer = styled('footer')(() => ({
  position: 'relative',
  backdropFilter: 'blur(6px)',
  color: '#aaa !important',
  backgroundColor: 'rgba(18, 18, 18, 0.72)',
  backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))',
  borderTop: '1px solid #e2e2e2',
  fontFamily: 'monospace',
  width: '100%',
  height: '50px',
  padding: '16px 0',
  textAlign: 'center',
  small: {
    fontSize: '1rem',
  },
  a: {
    color: 'rgba(255, 255, 255, 0.82)',
    textDecoration: 'none',
    marginLeft: '10px',
    transition: 'all 0.2s ease-in-out',
    borderBottom: '1px solid transparent',
    '&:hover': {
      color: 'white',
      borderColor: 'white',
    },
  },
}));

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);

  function logOut() {
    AuthService.logout();
    setUser(null);
  }

  return (
    <RootStyle>
      <Navbar user={user} logOut={logOut} />

      <MainStyle>
        {children}
      </MainStyle>

      <Footer>
        <Container>
          <small className="d-flex justify-content-center align-items-center m-0">
            Made with love by
            {' '}
            <a href="https://vk.com/lu.perfect">@lu.perfect</a>
          </small>
        </Container>
      </Footer>
    </RootStyle>
  );
};

export default Layout;
