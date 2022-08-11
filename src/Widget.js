import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import "./Widget.css"
import { Icon } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widget() {
    const newsArticle = (heading, time, numOfReaders) => { // description the props
        return (
            <div className="widget__article">
                <div className="widget__articleLeft">
                    <FiberManualRecordIcon/>
                </div>
                <div className="widget__articleRight">
                    <h4>{heading}</h4>
                    <p><span>{time}</span>h ago  <span>{ numOfReaders}</span> readers</p>
                </div>
            </div>
            
        )
    }

    // footer component
    function Footer() { 
        return (
            <div className="footer">
                <div className="footer__text">
                    <span>About</span> <span>Abilities</span> <span>Help Center</span>
                </div>
                <div className="footer__text">
                    <span>Privacy &#38; Terms</span> <span>Abilities</span>
                </div>
                <div className="footer__text">
                    <span>Advertising</span> <span>Business Service</span>
                </div>
                <div className="footer__text">
                    <span>get the linkedin app</span> <span>More</span>
                </div>
            </div>
        )
    }
  return (
    <div className='widget'>
          <div className="widget__news">
              <div className="widget__news_header">
                  <h2>LinkedIn News</h2>
                  <InfoIcon/>
              </div>
              {newsArticle("Serena to hang up racquet after Open", 10, 6401)}
              {newsArticle("If you put in the work, you will archieve the best performance", 10, 6401)}
              {newsArticle("React is the most used JavaScript library in 2022", 20, 9607)}
              {newsArticle("Is Redux too Good?", 20, 6401)}
              {newsArticle("Tesla hits News highs!!", 6, 14908 )}
          </div>
          <Footer />
          <div className="copyright">
              <img width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" />
              <p>LinkedIn Corporation &copy; 2022</p>
          </div>
    </div>
  )
}

export default Widget;
