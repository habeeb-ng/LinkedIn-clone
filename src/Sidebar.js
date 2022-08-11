import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser, userSlice } from './features/userSlice';
import "./sidebar.css";

function Sidebar({ name, email }) {
    // we get useSelector from react-redux and selectUser from userSlice file
    const user = useSelector(selectUser);
    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className='sidebar__hash'>#</span>
                <p>{ topic}</p>
          </div> 
        )
    }
  return (
      <div className='sidebar'>
          <div className="sidebar__top">
              <img width="100%" src="https://images.unsplash.com/photo-1494211448697-0e4cdf52f2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzA1Njg0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" /> {/*baground image*/}
              <Avatar src={user.photoUrl} className='sidebar__avatar'>
                  {user.displayName[0]} {/*here we use the first character of the name for the image if no image*/}
              </Avatar>
              <h2>{user.displayName}</h2>
              <h4>{ user.email}</h4>
          </div>
          {/* another section in the sidebar */}
          <div className="sidebar__stats">
              <div className="sidebar__stat">
                  <p>Who viewd you</p>
                  <p className="sidebar__statNumber">
                      2,345
                  </p>
              </div>
              <div className="sidebar__stat">
                  <p>Views on posts</p>
                  <p className="sidebar__statNumber">
                      2,345
                  </p>
              </div>
          </div>
          <div className="sidebar__bottom">
              <p>Recent</p>
              {recentItem('software engineering')}
              {recentItem('front-end developer')}
              {recentItem('React Developer')}
              {recentItem('React Native')}
              {recentItem('Mobile development')}


              </div>
    </div>
  )
}

export default Sidebar;
