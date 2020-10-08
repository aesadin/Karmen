import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { NavItem } from "react-bootstrap";
import { NavLink } from "react-bootstrap/";
import Layout from './Layout';

const About = () => {
  return (
    <React.Fragment>
      <Layout>
        <div>
            <h1>Karmen</h1>
            <div>
              <p>blah blah</p>
            </div>
            <div>
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item><Link to="/signup">Sign Up</Link></Dropdown.Item>
                  <Dropdown.Item><Link to="/signin">Sign In</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default withRouter(About);