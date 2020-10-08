import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


import Layout from './Layout';

const About = () => {
  return (
    <Layout>
      <React.Fragment>
      <div>
          <h1>Karmen</h1>
          <div>
            <p>blah blah</p>
            <button><Link to="/signup">Sign Up</Link></button>
            <button><Link to="/signin">Sign In</Link></button>
          </div>
      </div>
    </React.Fragment>
    </Layout>
  );
};

export default withRouter(About);