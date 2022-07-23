import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  border-bottom: solid 1px black;
  position: fixed;
  top: 0;
  background-color: #000105;
  z-index: 3;
`;

const NavItem = styled.div`
  padding: 20px;
  margin-right: 5px;
  color: white;
  text-decoration: none;
  cursor: pointer;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Link style={{ textDecoration: "none" }} to="/">
        <NavItem>Home</NavItem>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/status">
        <NavItem>Status</NavItem>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/item_list">
        <NavItem>Item List</NavItem>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/champions">
        <NavItem>Champions</NavItem>
      </Link>
    </HeaderContainer>
  );
};
