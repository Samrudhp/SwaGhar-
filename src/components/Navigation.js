import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  Container,
  IconButton,
  Menu,
  MenuItem
} from '@mui/material';
import { Menu as MenuIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navigation = () => {
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              display: { xs: 'none', sm: 'block' }
            }}
          >
            Housing Portal
          </Typography>

          {/* Mobile Menu */}
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={RouterLink} to="/" onClick={handleClose}>
                Home
              </MenuItem>
              {!user && (
                <MenuItem component={RouterLink} to="/register" onClick={handleClose}>
                  Register
                </MenuItem>
              )}
              {user && (
                <>
                  <MenuItem component={RouterLink} to="/application" onClick={handleClose}>
                    Application
                  </MenuItem>
                  <MenuItem onClick={() => { handleClose(); logout(); }}>
                    Logout
                  </MenuItem>
                </>
              )}
              {user && user.userType === 'government' && (
                <MenuItem component={RouterLink} to="/dashboard" onClick={handleClose}>
                  Dashboard
                </MenuItem>
              )}

            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <Button color="inherit" component={RouterLink} to="/">
              Home
            </Button>
            {!user && (
              <Button color="inherit" component={RouterLink} to="/register">
                Register
              </Button>
            )}
            {user && (
              <>
                <Button color="inherit" component={RouterLink} to="/application">
                  Application
                </Button>
                <Button color="inherit" onClick={logout}>
                  Logout
                </Button>
              </>
            )}
            {user && user.userType === 'government' && (
              <Button color="inherit" component={RouterLink} to="/dashboard">
                Dashboard
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;