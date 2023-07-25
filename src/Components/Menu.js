import React, { useState } from 'react';
import { Button, createTheme, ThemeProvider, useMediaQuery, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from "../Assets/logo-rubbank.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-scroll';
import "./Menu.css";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          '&:active': {
            backgroundColor: '#ffffff',
          },
        },
      },
    },
  },
});

const menuItems = [
  { name: 'Home', link: 'home' },
  { name: 'Passo a Passo', link: 'passoapasso' },
  { name: 'Benefícios', link: 'valores' },
  { name: 'Referências', link: 'depoimentos' },
  { name: 'Contato', link: 'contato' },
];

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton 
        onClick={handleClick} 
        style={{
          padding: '10px',
          backgroundColor: '#00E88F',
          outline: 'none',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          color: '#45504C',
          transition: '0.2s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '5px'
        }}
      >
        <span style={{
          height: '30px',
          width: '30px',
          display: 'inline-block',
          transition: 'transform 0.3s',
          transform: anchorEl ? 'rotate(180deg)' : 'rotate(0)',
        }}>
          {anchorEl ? <CloseIcon /> : <MenuIcon />}
        </span>
      </IconButton>

      <Menu            
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            width: "91%",
            margin: "2rem 0.1rem 0 0rem",
            borderRadius: "0.5rem",
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Para um fundo semi-transparente
            backdropFilter: 'blur(3px)', // Para desfocar o conteúdo atrás do menu
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // Para adicionar uma sombra ao menu
            border: '1px solid rgba(255, 255, 255, 0.18)', // Para adicionar uma borda sutil ao menu
          },
        }}
      >
        {menuItems.map((item, index) => (
            <Link 
              key={index}
              to={item.link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleClose} 
            >
              <MenuItem>
                {item.name}
              </MenuItem>
            </Link>
          ))}
      </Menu>
    </>
  );
};

const MyMenu = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <div className="header">
        <div className="app-bar">
          <div className="toolbar">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="menu">
              {isMobile ? null : menuItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="botao">
              {isMobile ? <MobileMenu /> :
                <button className="secondary-button">
                  Acesse Sua Conta
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MyMenu;
