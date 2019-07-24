import React from 'react';
import { Link } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import logo from '../../assets/logo.png';

// Styles
import './header.styles.scss';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        }
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
    
    render() {
        return (
        <header className='header'>
            {/* <Link className="store-id" to='/'>
                <img src={logo} alt='Logo' className='logo'/>
                <h1 className="storename">Store</h1>
            </Link>
            <div className='menu-list'>
                <Link className='menu-item' to='/'>Beranda</Link>
                <Link className='menu-item' to='/register'>Daftar</Link>
                <Link className='menu-item' to='/login'>Login</Link>
            </div> */}
            <Navbar expand="md" light>
                <NavbarBrand>
                    <Link className="store-id" to='/'>
                        <img src={logo} alt='Logo' className='logo'/>
                        <h1 className="storename">Store</h1>
                    </Link>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link className='menu-item nav-link' to='/'>Beranda</Link>
                    </NavItem>
                    <NavItem>
                        <Link className='menu-item nav-link' to='/register'>Daftar</Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Akun
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem>
                            <Link className='menu-item' to='/login'>Login</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link className='menu-item' to='/register'>Daftar</Link>
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        <Link className='menu-item' to='/user/andre'>@andre</Link>
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
        );
    };
};

export default Header;