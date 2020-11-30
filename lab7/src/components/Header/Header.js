import React, {useState} from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './Header.styled';

const Header = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" >
                        <NavIcon />
                        Lawyers
                    </NavLogo>
                    <MobileIcon onClick={handleClick}> 
                    {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick}>
                        <NavItem>
                            <NavLinks to="/">
                                Home
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavMenu onClick={handleClick}>
                        <NavItem>
                            <NavLinks to="/catalog">
                                Catalog
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavMenu onClick={handleClick}>
                        <NavItem>
                            <NavLinks to="/">
                                About us
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Header;