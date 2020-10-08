# Karmen

### Capstone

### By Allison Sadin

## Description
Karmen is an application developed to help users feel more secure when they choose to donate money for a cause. With a recent rise in fundraising, there has also been an increase in fraudulent fundraisers and donation based organizations. This application allows users to login through facebook and twitter, then verify different fundraisers with the click of a button. This way, users can see fundraisers their friends verified, or perhaps a local activist they follow on social mediea, and feel confident that the fundraiser is not a fake. 

<br><br>

## User Stories
*  Users can create an account using their email and a password, or the user can login through a facebook or twitter pop up page.
*  Users can scroll through different fundraisers created by other users.
*  Users can add their own fundraisers.
*  Users can search fundraisers based on location.
*  Users who are logged in through facebook or twitter can "verify" fundraisers to let people know they are legitimate.
<br>

## Set Up/Installation

To Clone:

1.  Navigate to the [Karmen respository](https://github.com/allison-sadin/karmen) and copy the project's URL.

2. Clone this project using the GitHub command:
`$ git clone https://github.com/allison-sadin/karmen.git`

3. Navigate to the newly created `karmen` directory in [Visual Studio Code](https://code.visualstudio.com/) or another editor.

4. Create a .env file in the root directory of karmen. This is where private keys will be stored. The .env file has already been added to the .gitignore file of this repository. Make sure to commit this before copying the private keys into the .env file, otherwise they will be pushed to github.

5. Next, go to the [Google Firebase](https://firebase.google.com/). Create an account or login if you already have one. Click the "Create a Project" button, add the project name "karmen", then click the `</>` symbol to add firebase to a new web application. You will then be given a configuration: 
  ```
  var firebaseConfig = {
    apiKey: "YOUR-UNIQUE-CREDENTIALS",
    authDomain: "YOUR-PROJECT-NAME.firebaseapp.com",
    databaseURL: "https://YOUR-PROJECT-NAME.firebaseio.com",
    projectId: "YOUR-UNIQUE-PROJECT-NAME",
    storageBucket: "YOUR-UNIQUE-URL",
    messagingSenderId: "YOUR-UNIQUE-CREDENTIALS",
    appId: "YOUR-UNIQUE-APPID"
  };
  ```

6.  Next, create a database by clicking on the "Database" tab in the "Develop" side panel on the left side of the console and then click "Create database". Do not use a realtime database, choose the firestore database.

7. In your .env file, copy and paste your keys from firebase. The keys must be stored as follows, in all capitals, starting with REACT_APP.
  ```
  REACT_APP_FIREBASE_API_KEY = "YOUR-UNIQUE-CREDENTIALS"
  REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR-PROJECT-NAME.firebaseapp.com"
  REACT_APP_FIREBASE_DATABASE_URL = "https://YOUR-PROJECT-NAME.firebaseio.com"
  REACT_APP_FIREBASE_PROJECT_ID = "YOUR-PROJECT-FIREBASE-PROJECT-ID"
  REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR-PROJECT-NAME.appspot.com"
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR-PROJECT-SENDER-ID"
  REACT_APP_FIREBASE_APP_ID = "YOUR-PROJECT-APP-ID"
  ```

8. Type `$ npm install` in your terminal to install all webpack plugins and libraries. 

9. Once installation is complete, type `$npm run build`, then`$ npm start` to see the project in the web browser.


## Known Bugs

## Support and Contact Details

If there are any issues or questions, please send an email to allisonsadin@gmail.com
<br>

## Technologies Used

*  JSX
*  CSS
*  JavaScript
*  Bootstrap 4 MDB
*  React
*  Redux
*  Firebase / Firestore
*  OAuth Facebook and Twitter Authentication
*  VS Code 

<br>

### License

*This project uses the following license: [MIT](https://opensource.org/licenses/MIT)*

Copyright (c) 2020 **_Kate Skorija_** 