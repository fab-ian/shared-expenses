import React, { Component } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return(
      <div>
        <Navbar color="primary" className="navbar-expand-sm navbar-dark fixed-top">
          <NavbarBrand href="/">Shared Expenses</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/signin/">Sign in</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup/">Sign up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signout/">Sign out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>      
    )
  }
}