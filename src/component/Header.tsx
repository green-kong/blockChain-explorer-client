import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderTemplate = styled.div`
  width: 1200px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const Logo = styled.h1`
  margin-top: 0;
  width: 280px;
  height: 100px;
  text-align: center;
  cursor: pointer;
  line-height: 100px;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavList = styled.li`
  margin: 0 50px;
  font-size: 20px;
  cursor: pointer;
  font-weight: 700;
`;

export const Header = () => {
  return (
    <HeaderTemplate>
      <Logo>
        <Link to="/">KONG Explorer</Link>
      </Logo>
      <Nav>
        <NavList>
          <Link to="/">Home</Link>
        </NavList>
        <NavList>
          <Link to="/block">Block</Link>
        </NavList>
        <NavList>
          <Link to="/transaction">Transaction</Link>
        </NavList>
      </Nav>
    </HeaderTemplate>
  );
};
