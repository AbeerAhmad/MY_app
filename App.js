import React, { Component } from 'react';
import Appcontainer from './navigation/navigate';
import { Provider } from 'react-redux';
import store from './store/store'
import firebase from 'firebase'
import {connect} from 'react-redux'





class App extends Component {
  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyA_u38jh4j_LGZSq2MDQUJtxkMc-wBqVsE",
      authDomain: "myapp-a8906.firebaseapp.com",
      databaseURL: "https://myapp-a8906.firebaseio.com",
      projectId: "myapp-a8906",
      storageBucket: "myapp-a8906.appspot.com",
      messagingSenderId: "759284376562",
      appId: "1:759284376562:web:58f5b1dbf93d362f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <Provider store={store}>
        <Appcontainer />
      </Provider>
    )
  }
}
export default App