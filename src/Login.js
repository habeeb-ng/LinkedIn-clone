import React, { useState } from 'react'
import { auth } from './firebase';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./Login.css";
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    // auth
    signInWithEmailAndPassword(auth, email, password) // a firebase funtion that lets user to sign in with email and password
      .then((userAuth) => {
        dispatch(login({
          email: userAuth.user.email,
          password: userAuth.user.password,
          displayName: userAuth.user.displayName,
          profileUrl: userAuth.user.profileUrl,
        }
          
        ))
      })
      .catch((erro) => {
        alert(erro.message);
    })
  }

  const register = () => {
    if (!fullName) {
      alert("please enter a full name");
    }

    createUserWithEmailAndPassword(auth, email, password) // we use this to create a user for our app
      .then((userAuth) => {
        console.log("user created", userAuth.user)
        updateProfile(
          userAuth.user, {
            displayName: fullName, //displayName shoukd not be changed, because it refers to firbase
            photoURL: profileUrl // this should not change as well
          }
        ).then(() => {
          //we dispatch the login action at this point to the userSlice in redux
          dispatch(login({
            //we are getting the following from firebase auth
            email: userAuth.user.email, // 
            uid: userAuth.user.uid,
            displayName: fullName,
            photoURL: profileUrl
          }))
        }).catch((err) => {
          alert(err.message)
        })
      })
      .catch((error) => {
        alert(error.message)
      });

    setEmail("");
    setPassword("");
    setFullName("");
    setProfileUrl("");
    
  }
  
  return (
    <div className='login'>
      <img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" />
      <form action="">
        <input value={fullName} onChange={(e)=>{setFullName(e.target.value)}} placeholder="Full Name required if registering" type="text" />
        <input value ={profileUrl} onChange={(e)=>{setProfileUrl(e.target.value)}} placeholder="Profile ic Url (optional)" type="text" />
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" type="text" />
        <input value={password} onChange={(e) =>{setPassword(e.target.value)}} placeholder="Password" type="password" />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a memeber? {" "}
        <span className="login__register" onClick={register}>Registers Now</span>
      </p>
    </div>
  )
}

export default Login