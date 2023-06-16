import { Outlet, useLocation} from 'react-router-dom';
import { Suspense } from 'react';
import {  Header, Nav, Link, LogoWrapper } from "./Layout.styled";
import logo from '../../images/logo.png';

export const Layout = () => {
    const location = useLocation();

    return (
        <div>
            <Header>
                <LogoWrapper to="/">
                    <img src={logo} alt="logo" width="90" height="28"></img>
                </LogoWrapper>

                <Nav>
                    <Link to="/">  Home </Link>
                    <Link to="/tweets" state={{ from: location }}> Tweets </Link>
                </Nav>
            </Header>
            
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
      
        </div>
    );
};