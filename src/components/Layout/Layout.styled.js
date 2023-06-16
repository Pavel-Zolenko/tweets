import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    padding: 10px;
    border-bottom: 1px solid #2a363b;
    background-color: #5736A3;
`;

export const Nav = styled.nav`
    display: flex;
    gap: 60px;
`;

export const Link = styled(NavLink)` 
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 10px;
    color: #EBD8FF;

    &.active {
    color: white;
    background-color: #5CD3A8;
  }
`;

export const LogoWrapper = styled(NavLink)`
    position: absolute;
    left: 30px;
    padding: 10px 0px;
`;
