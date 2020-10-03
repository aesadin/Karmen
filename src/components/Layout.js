import React from 'react';
import PropTypes from 'prop-types';
import Header from "./Header";
import Footer from "./Footer"

import '../styles/Layout.css';

const propTypes = {
  children: PropTypes.node.isRequired,
  contentCenter: PropTypes.bool
};

const defaultProps = {
  contentCenter: false
};

const Layout = ({ children, contentCenter }) => { // add Header component here instead of this boring header?
  return (
    <React.Fragment>
      <div class="header">
        <Header />
      </div>
      <main className={contentCenter ? 'content-center' : ''}>{children}</main>
      <div class="footer">
      <Footer />
      </div>
    </React.Fragment>
  );
};

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;