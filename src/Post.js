import { Avatar } from '@mui/material'
import React from 'react'
import InputOption from './InputOption'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

import "./Post.css"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { forwardRef } from 'react'

const Post = forwardRef(({ name, description, message, photoUrl }, ref) =>{
  return (
      <div ref ={ref} className='post'>
          {/* post header */}
          <div className="post__header">
              <Avatar src={photoUrl}>
                  {name[0]} {/*if there is no photo url, then we use the first letter of the name*/}
              </Avatar> 
              <div className="post__info">
                  <h2>{name}</h2>
                  <p>{ description}</p>
              </div>
          </div>
          {/* post body */}
          <div className="post__body">
              <p>{message}</p>
          </div>
          {/* option buttons */}
          <div className="post__butons">
              <InputOption Icon={ThumbUpOffAltIcon} title="like" color="gray" />
              <InputOption Icon={CommentIcon} title="comment" color="gray" />
              <InputOption Icon={ShareIcon} title="share" color="gray" />
              <InputOption Icon={SendIcon } title="send" color="gray" />
          </div>
          
    </div>
  )
})

export default Post