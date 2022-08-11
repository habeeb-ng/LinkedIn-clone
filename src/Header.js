import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
function Header() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const logOutOfApp = () => {
        dispatch(logout());
        signOut(auth);

    }
  return (
      <div className='header'>
          <div className="header__left">
              
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="img" /> {/*the linkedin icon*/}
              <div className="header__search">
                  <SearchIcon />
                  <input placeholder="Search" type="text" />
              </div>

          </div>
          {/* right side of the header */}
          <div className="header__right">
              <HeaderOption Icon={HomeIcon} title="Home"/>
              <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
              <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
              <HeaderOption Icon={ChatIcon} title="Messages"/>
              <HeaderOption Icon={NotificationsIcon} title="Notification"/>
              <HeaderOption avatar={true}
                  title="Me" onClick={ logOutOfApp} />
              
              
          </div>
    </div>
  )
}

export default Header;