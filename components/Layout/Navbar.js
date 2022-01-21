import { useState } from 'react';
import {
  AppBar, Avatar, Box, Button, Container, Icon, ListItemIcon, ListItemText, MenuItem, Popover, Toolbar, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import MenuItemButton from './MenuItemButton';

import data from './menu.data';
import { logoutUser } from '../../src/features/auth/store/userSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  const [userMenu, setUserMenu] = useState(null);

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  async function logout() {
    await dispatch(logoutUser());
    userMenuClose();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          minHeight: '72px',
          display: 'flex',
          justifyContent: 'center',
          boxShadow: 'none',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              CTF
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Button
              sx={{
                minHeight: '52px',
                minWidth: '52px',
                m: 0,
                ml: '0.6rem',
                py: 0,
                pr: '0.6rem',
                pl: 0,
                borderRadius: '1rem',
              }}
              color="primary"
              onClick={userMenuClick}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  mx: '1rem',
                  alignItems: 'flex-end',
                }}
              >
                <Typography
                  sx={{
                    display: 'flex',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                  component="span"
                >
                  {user.id === 'Гость' ? 'Гость' : user.name}
                </Typography>
                {user.id !== 'Гость' && (
                  <Typography
                    color="textSecondary"
                    sx={{
                      textTransform: 'capitalize',
                      fontWeight: 500,
                      lineHeight: 1,
                      fontSize: '11px',
                    }}
                  >
                    {user.id}
                  </Typography>
                )}
              </Box>

              {user.id === 'Гость' ? (<Avatar />) : (
                <Avatar>
                  {user.id[0]}
                </Avatar>
              )}
            </Button>

            <Popover
              open={Boolean(userMenu)}
              anchorEl={userMenu}
              onClose={userMenuClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              sx={{
                py: '2rem',
              }}
            >
              {user.id === 'Гость' ? (
                <>
                  {data.publicRoutes.map((route) => (
                    <MenuItemButton
                      key={route.id}
                      href={route.href}
                      content={route.content}
                    />
                  ))}
                </>
              ) : (
                <>
                  {data.authRoutes.map((route) => (
                    <MenuItemButton
                      key={route.id}
                      href={route.href}
                      onClick={userMenuClose}
                      content={route.content}
                    />
                  ))}
                  <MenuItem
                    onClick={async () => {
                      await logout();
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: '10rem' }}>
                      <Icon>exit_to_app</Icon>
                    </ListItemIcon>
                    <ListItemText primary="Выйти" />
                  </MenuItem>
                </>
              )}
            </Popover>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
