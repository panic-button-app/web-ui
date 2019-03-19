import { Button, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as firebase from "firebase";
import React, { useEffect, useState } from "react";
import Head from "../src/Head";
import Login from "../src/Login";
require("firebase/auth");

function createFirebaseApp() {
  // `firebase.app()` will throw an exception if the default app hasn't been loaded.
  // The rest of this function will initialise the app, so we ignore the exception.
  try {
    firebase.app();
    return;
  } catch (e) {}

  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
  };
  firebase.initializeApp(config);
}

const drawerWidth = 260;

const styles = theme => ({
  drawer: {
    width: drawerWidth
  },
  content: {
    marginTop: "calc(64px + 1.5em)"
  }
});

export default withStyles(styles, { withTheme: true })(props => {
  const { classes, theme } = props as any;

  const [user, setUser] = useState<firebase.User>(null);
  const [firebaseLoaded, setFirebaseLoaded] = useState(false);
  useEffect(() => {
    createFirebaseApp();
    setFirebaseLoaded(true);

    console.log(firebase);

    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        user.getIdToken().then(console.log);
      }
      setUser(user);
    });
  });

  if (!firebaseLoaded) {
    return null;
  }

  if (user == null) {
    return <Login />;
  }

  return (
    <div>
      <Head />
      <div className={classes.content}>
        <Card>
          <Button>I'm not feeling well</Button>
        </Card>
        <Typography>Hello world, this is me</Typography>
      </div>
    </div>
  );
});
