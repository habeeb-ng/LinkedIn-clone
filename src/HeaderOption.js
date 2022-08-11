import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './headerOption.css'

function HeaderOption({ avatar, Icon, title,  onClick}) { //destructure the props
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className='headerOption'>
        {/* the below code means, if an Icon is passed in, that when it should render the icon
        which means it only renders if you pass in material UI icon which is a component */}
          {Icon && <Icon className='headerOption__icon' />}  {/* here we pasin the icon  and also give it a class name so that we can stlye it*/} 
          {/* averter: we hetv Icon class from material ui */}
          {avatar &&
          <Avatar src={user? user.photoUrl :""} className="headerOption__icon">
          {user? user.displayName[0]:"" }
          {/* {user?.displayName} */}
          </Avatar>
           } 
          {/* for the title render */}
          <h3 className='headerOption__title'>{title}</h3> {/*the title here is coming from the destructure props in the funtion component parameter */}
    </div>
  )
}

export default HeaderOption;
