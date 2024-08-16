import styled from 'styled-components';

export const HeaderContainer = styled.div`
  color: ${(props) => props.theme.text};
  padding: 18px 0px;
  display: flex;
  align-items: center;
  gap: 70px;
`;

export const MainContainer = styled.header`
  background-color: ${(props) => props.theme.background};
  width: 100%;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StartButton = styled.button`
  border-radius: 39px;
  background: #f35024;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  border: none !important;
`;

export const Nav = styled.nav`
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
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }
`;

export const NavRight = styled.nav`
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
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: ${(props) => props.theme.mobileLogo};
  }
`;

export const MobileNav = styled.nav`
  display: none;
  background: ${(props) => props.theme.background};
  padding: 20px;
  width: 250px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
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
    color: ${(props) => props.theme.text};
    text-decoration: none;
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    background: ${(props) => props.theme.background};
  }
`;
