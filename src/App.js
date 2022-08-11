import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from "./Sidebar";
import Login from './Login';
import {onAuthStateChanged} from "firebase/auth";
import { auth } from './firebase';
import Widget from './Widget';

function App() {
  const user = useSelector(selectUser); // it is a hook from react-redux where we pass in our slelector
  const dispatch = useDispatch();


  useEffect(() => { 
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) { // if user is loged in
        // user logged in
        dispatch(login({ //we ar getting thi info from our redux store
          email: userAuth.email, // 
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
      );


      } else {
        // user not logged in     
            dispatch(logout());
      }
    })
  },[])
  
  return (
    <div className="app">
      <Header/>
      {!user ? (<Login />) : (
   
          // {/* body of the app */}
          <div className="app__body"> {/*the body container */}
          {/* sidebar */}
          <Sidebar name="Habeeb Awolumate" email="habeebawolumate@gmail.com" />
          {/* feed */}
          <Feed/>
          <Widget/>
        </div>
        
      )}
      
        
    </div>
  );
}

export default App;
