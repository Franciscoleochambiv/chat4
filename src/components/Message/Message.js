//import React from 'react';
import React, { useEffect, useRef, useState } from "react";
import './Message.css'; 
import ReactEmoji from 'react-emoji';
import monment from 'moment';
//passed in a message and name from messages.js
//message is an object that contains user and text
//user is the sender of the message and the text is the body of the msg
const Message = ({message:{ user, text} , name}) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  const time = monment(user.createdAt).format('hh:mm a');










  //if true we render a blue message on the right side as it is sent by the current user
  if(user === trimmedName){
    isSentByCurrentUser = true;
  }

  return(
      isSentByCurrentUser 
      ? (
        <div className = "messageContainer justifyEnd">
            <p className = "sentText pr-10">{trimmedName}</p>
            <p className = "sentText pr-10">{time} </p>
            
            <div className = "messageBox backgroundBlue">
                <p className = "messageText colorWhite">{ReactEmoji.emojify(text)}</p>

            </div>   
           
        </div>
        
      )
      : (
        <div className = "messageContainer justifyStart">
        <div className = "messageBox backgroundLight">
            <p className = "messageText colorDark">{ReactEmoji.emojify(text)} </p>
        </div>   
        <p className = "sentText pl-10">{user} {time} </p>
    </div>
      )
  )
}

export default Message;