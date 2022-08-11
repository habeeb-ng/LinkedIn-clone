import React, {useEffect, useState} from 'react'
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import { Avatar } from '@mui/material';
import "./Feed.css";
import InputOption from './InputOption';
import Post from './Post';
import { db, colRef } from "./firebase"
import {addDoc, getDocs, serverTimestamp, orderBy, query, onSnapshot } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const [input, setInput] = useState("")
    const [post, setPost] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {

        //getDocs returns a promise
        // getDocs(colRef).then((snapshot) => {
        //     setPost(
        //             snapshot.docs.map((doc) => (
        //             {
        //               id: doc.id,
        //             data: doc.data(),
        //             }
        //             )))
            
        // })
        const q = query(colRef, orderBy("timestamp", "desc")); // we use this to sedt the order of the database in firestore

        //real time listener
            onSnapshot(q, (snapshot) => { // this will update the database on real time without refreshing
            setPost(
                snapshot.docs.map((doc) => ( // we map every thing inside the database into out post array the was created with useState
                {
                    id: doc.id,
                data: doc.data(),
                }
                )))
        })
        // query(colRef, orderBy("timestamp", "desc"));
        //here we are accessing the firebase
    },[])
    const sendPost = (e) => {
        e.preventDefault();
        addDoc(colRef, { // when we submit the from, we add this object to out databae
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "", // conditiion if there is no photio url
            timestamp: serverTimestamp(), // this is for different country times
        }).then(setInput("")) // it return a promise so we clear the inout feed after promis success
        
        
    }
    // console.log(post);
  return (
      <div className="feed">
          <div className="feed_inputContainer">
              {/* <div className="feed__inputContainer__avatar">
                  <Avatar/>
              </div> */}
              <div className="feed__input">
                  <CreateIcon />
                  
                  <form action="" onSubmit={sendPost}>
                      <input value={input} onChange={(e) => {
                          setInput(e.target.value)
                      }} type="text" placeholder="Start a post" />
                      <button onClick={sendPost} type='submit'>Post</button>
                  </form >
              </div>
              <div className="feed__inputOption">
                  {/* input option */}
                  <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                  <InputOption Icon={YouTubeIcon} title="Video" color="#E7A33E" />
                  <InputOption Icon={EventIcon} title="Event" color="#C0CBCD" />
                  <InputOption Icon={ViewDayIcon} title="Write article" color="#7FC15E" />
              </div>
          </div>
          {/* post */}
          <FlipMove>
              {post.map(({id, data: {name, description, message, photoUrl}}) =>  (
                  <Post
                  key={id}
                  name={name}
                  description={description}
                  message={message}
                  photoUrl={photoUrl}
              />))}
          </FlipMove>

          
    </div>
  )
}

export default Feed;