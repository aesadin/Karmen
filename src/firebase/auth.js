import firebase from './firebase';
import { auth } from '.';

export const getAuth = () => {
  return firebase.auth();
};

export const twitterOAuth = () => {
  return new firebase.firebase_.auth.TwitterAuthProvider();
};

export const facebookOAuth = () => {
  return new firebase.firebase_.auth.FacebookAuthProvider();
};

