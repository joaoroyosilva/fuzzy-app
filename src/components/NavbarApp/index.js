import React from 'react';
import { Navbar } from 'react-bulma-components';

export default function NavbarApp() {
  return (
    <Navbar color="primary" className="is-transparent">
      <Navbar.Brand>
        <Navbar.Item href="/">FuzzyApp</Navbar.Item>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container position="end">
          <div className="navbar-item">
            <a className="button is-info" href="/variables">
              Variables
            </a>
          </div>
          <div className="navbar-item">
            <a className="button is-success" href="/inputs">
              Configure Inputs
            </a>
          </div>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
}
