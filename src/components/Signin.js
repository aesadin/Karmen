import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../containers/Layout';
import buttonList from '../initialButtonList';
import SocialButtonList from './SocialButtonList';
import { auth } from '../firebase';


class Signin extends Component {

  
  componentDidMount() {
    auth.getAuth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/dashboard');
      }
    });
  }

  render() {
    return (
      <Layout contentCenter={true}>
        <p>Connect With</p>
        <SocialButtonList buttonList={buttonList} auth={auth.getAuth} />
        <Link to="/about">About</Link>
      </Layout>
    );
  }
}

export default Signin;