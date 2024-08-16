import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
// import LightLogo from './assets/logo-light.svg';
// import DarkLogo from './assets/logo-dark.svg';
// import hamburgerLight from './assets/Hamburger-light.svg';
// import hamburgerDark from './assets/Hamburger.svg';

// Define themes
const lightTheme = {
  background: '#FFFFFF',
  text: '#282828',
//   logo: LightLogo,
//   mobileLogo:hamburgerLight

};

const darkTheme = {
  background: '#000000',
  text: '#FFFFFF',
//   logo: DarkLogo,
//   mobileLogo:hamburgerDark
};

const HeaderContainer = styled.div`
  color: ${props => props.theme.text};
  padding: 18px 0px;
  display: flex;
  align-items: center;
  gap: 70px;
`;

const MainContainer = styled.header`
  background-color: ${props => props.theme.background};
  width: 100%;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.img`
  height: 40px; /* Adjust size as needed */
`;

const StartButton = styled.button`
  border-radius: 39px;
  background: #f35024;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  border: none !important;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 2.5rem;
  }

  li {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
  }

  a {
    color: ${props => props.theme.text};
    text-decoration: none;
  }
`;

const NavRight = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1.25rem;
    align-items: center;
  }

  li {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
  }

  a {
    color: ${props => props.theme.text};
    text-decoration: none;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    padding:10px;
  }
`;

const MobileNav = styled.nav`
  display: none;
  background: ${props => props.theme.background};
  padding: 20px;
  width: 250px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  
  @media (max-width: 768px) {
    display: ${props => (props.open ? 'block' : 'none')};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  li {
    font-size: 16px;
    font-weight: 600;
  }

  a {
    color: ${props => props.theme.text};
    text-decoration: none;
  }
`;

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  /* padding: 0 5%; */
  @media (max-width: 768px) {
    background: ${props => props.theme.background};
  }

`;

const Header = () => {
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? darkTheme
      : lightTheme
  );

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleThemeChange = (e) => {
      setTheme(e.matches ? darkTheme : lightTheme);
    };

    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener('change', handleThemeChange);

    return () => matchMedia.removeEventListener('change', handleThemeChange);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <HeaderWrapper>
        <MobileMenuIcon onClick={toggleMobileMenu}>
          <Logo src={theme.logo} alt="Logo" />
          <img src={theme.mobileLogo} alt="Menu" />
        </MobileMenuIcon>
        <MobileNav open={isMobileMenuOpen}>
          <ul>
            <li><Link to="/">Product</Link></li>
            <li><Link to="/">Shop</Link></li>
            <li><Link to="/">Pages</Link></li>
            <li><Link to="/">Integrations</Link></li>
            <li><Link to="/">Developers</Link></li>
            <li><Link to="/">Login</Link></li>
            <li><StartButton>Start for free</StartButton></li>
          </ul>
        </MobileNav>
        <MainContainer>
          <HeaderContainer>
            <Logo src={theme.logo} alt="Logo" />
            <Nav>
              <ul>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/">Pages</Link></li>
                <li><Link to="/">Integrations</Link></li>
                <li><Link to="/">Developers</Link></li>
              </ul>
            </Nav>
          
          </HeaderContainer>
          <NavRight>
              <ul>
                <li><Link to="/">Login</Link></li>
                <li><StartButton>Start for free</StartButton></li>
              </ul>
            </NavRight>
        </MainContainer>
      </HeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;