import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { NavItem } from "react-bootstrap";
import { NavLink } from "react-bootstrap/";
import Layout from './Layout';
import Header from './Header';
import Footer from './Footer';
import '../styles/about.css';

const About = () => {
  return (
    <React.Fragment>
      {/* <Layout> */}
      <Header />
        <div className="content-container">
          <h1><span>K</span>armen</h1>
          <div className="info">
            <p><em>Post, search and verify fundraisers in your community. Help raise money for a cause you care about, while helping to ensure donations are going where they were intended.</em></p>
          </div>
          <div className="signup-btn">
            <button type="button" class="btn btn-outline"><Link to="/signup">Sign Up</Link></button>
          </div>
          <div className="signin-btn">
            <button type="button" class="btn btn-outline"><Link to="/signin">Sign In</Link></button>
          </div>
        </div>
      {/* </Layout> */}
      <Footer/>
    </React.Fragment>
  );
};

export default withRouter(About);

{/* <div className= "button-group" class="btn-group" >
            <button type="button" class="btn btn-outline"><Link to="/signup">Sign Up</Link></button>
            <button type="button" class="btn btn-outline"><Link to="/signin">Sign In</Link></button>
          </div> */}