import React from 'react';
import PropTypes from 'prop-types';
// import Header from "../components/Header";

import './Layout.css';

const propTypes = {
  children: PropTypes.node.isRequired,
  contentCenter: PropTypes.bool
};

const defaultProps = {
  contentCenter: false
};

const Layout = ({ children, contentCenter }) => { // add Header component here instead of this boring header?
  return (
    <section>
      <header>
        <h1>Karmen</h1>
      </header>
      <main className={contentCenter ? 'content-center' : ''}>{children}</main>
      <footer>
        <p>
          Made with{' '}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>{' '}
          by Allison Sadin
        </p>
      </footer>
    </section>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;