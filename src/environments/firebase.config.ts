import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyDu2OI2hhpw_PVR2Kt3fQa7HAxmqm9Br_g",
  authDomain: "angfire-project.firebaseapp.com",
  databaseURL: "https://angfire-project.firebaseio.com",
  storageBucket: "angfire-project.appspot.com",
  messagingSenderId: "703811215413"
};



export const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};
