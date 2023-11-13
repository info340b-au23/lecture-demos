// import React from 'react';

// import CHAT_HISTORY from '../data/chat_log.json';

// export function ChatPane(props) {
//   const currentChannel = props.currentChannel;

//   const handleClick = (event) => {
//     console.log("you clicked me!");
//   }

//   //only show current channel messages
//   const channelMessage = CHAT_HISTORY.filter((msgObj) => {
//     return msgObj.channel === currentChannel;
//   })

//   const messageItemArray = channelMessage.map((messageObj) => {
//     const element = (
//       <MessageItem
//         messageData={messageObj}
//         key={messageObj.timestamp}
//       />
//     )
//     return element;
//   })


//   // // original 
//   // return (
//   //   <div className="scrollable-pane">
//   //     <div className="pt-2 my-2">
//   //       {/* testing button */}
//   //       <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
//   //         Click me!
//   //       </button>
//   //       <hr/>

//   //       {/* messages */}
//   //       {messageItemArray}
//   //     </div>
//   //   </div>
//   //   )
//   // }

//   // Slide 13 - show the button if 'general' is the current channel
//   return (
//     <div className="scrollable-pane">
//       <div className="pt-2 my-2">
//         {/* testing button */}
//         {currentChannel === 'general' &&
//           <div>
//             <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
//               Click me!
//             </button>
//             <hr />
//           </div>}
//         {/* messages */}
//         {messageItemArray}
//       </div>
//     </div>
//   )

// }


// function MessageItem(props) {
//   const { userName, userImg, text } = props.messageData;
//   // const userName = props.messageData.userName;
//   // const userImg = props.messageData.userImg;

//   const handleClick = (event) => {
//     console.log("you liked " + userName + "'s post!");
//   }

//   return (
//     <div className="message d-flex mb-3">
//       <div className="me-2">
//         <img src={userImg} alt={userName + "'s avatar"} />
//       </div>
//       <div className="flex-grow-1">
//         <p className="user-name">{userName}</p>
//         <p>{text}</p>
//         <button className="btn like-button" onClick={handleClick}>
//           <span className="material-icons" style={{ color: "grey" }}>favorite_border</span>
//         </button>
//       </div>
//     </div>
//   )
// }


// // Slide 14 and 16 - conditional rendering and initial event handling
// import React from 'react';

// import CHAT_HISTORY from '../data/chat_log.json';

// export function ChatPane(props) {
//   const currentChannel = props.currentChannel;

//   //(trying to update count on button)
//   let currentCount = 0;
//   const handleClick = (event) => {
//     console.log("you clicked me!: ", currentCount);
//     currentCount = currentCount + 1;
//   }

//   //only show current channel messages
//   const channelMessages = CHAT_HISTORY.filter((msgObj) => {
//     return msgObj.channel === currentChannel;
//   })

//   //IF THERE ARE NO MESSAGES IN THIS CHANNEL, SHOW THIS
//   if (channelMessages.length === 0) {
//     return <p>No Chat Messages Yet</p>
//     // return null;
//   }
//   const messageItemArray = channelMessages.map((messageObj) => {
//     const element = (
//       <MessageItem
//         messageData={messageObj}
//         key={messageObj.timestamp}
//       />
//     )
//     return element;
//   })

//   return (
//     <div className="scrollable-pane">
//       <div className="pt-2 my-2">
//         {/* testing button */}
//         {currentChannel === 'general' &&
//           <div>
//             <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
//               Click me: {currentCount}
//             </button>
//             <hr />
//           </div>}
//         {/* messages */}
//         {messageItemArray}
//       </div>
//     </div>
//   )
// }

// function MessageItem(props) {
//   const { userName, userImg, text } = props.messageData;
//   // const userName = props.messageData.userName;
//   // const userImg = props.messageData.userImg;

//   const handleClick = (event) => {
//     console.log("you liked " + userName + "'s post!");
//   }

//   return (
//     <div className="message d-flex mb-3">
//       <div className="me-2">
//         <img src={userImg} alt={userName + "'s avatar"} />
//       </div>
//       <div className="flex-grow-1">
//         <p className="user-name">{userName}</p>
//         <p>{text}</p>
//         <button className="btn like-button" onClick={handleClick}>
//           <span className="material-icons" style={{ color: "grey" }}>favorite_border</span>
//         </button>
//       </div>
//     </div>
//   )
// }

// Slide 21 and 22 - Using State Hooks
import React, { useState } from 'react';
import CHAT_HISTORY from '../data/chat_log.json';

export function ChatPane(props) {
 
  // const stateManagementArray = useState(0); //start out at 0 very first time
  // console.log("stateManagementArray: ", stateManagementArray);
  // const count = stateManagementArray[0];
  // const setCount = stateManagementArray[1];

  //instead destructure
  const [count, setCount] = useState(0);
  const currentChannel = props.currentChannel;


  const handleClick = (event) => {
    setCount(count + 1);
    console.log("you clicked me!", count);
  }

  //only show current channel messages
  const channelMessages = CHAT_HISTORY.filter((msgObj) => {
    return msgObj.channel === currentChannel;
  })

  //IF THERE ARE NO MESSAGES IN THIS CHANNEL, SHOW THIS
  if (channelMessages.length === 0) {
    return <p>No Messages Yet</p>
  }
  const messageItemArray = channelMessages.map((messageObj) => {
    const element = (
      <MessageItem
        messageData={messageObj}
        key={messageObj.timestamp}
      />
    )
    return element;
  })

  return (
    <div className="scrollable-pane">
      <div className="pt-2 my-2">
        {/* testing button */}
        {currentChannel === 'general' &&
          <div>
            <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
              Click me: {count}
            </button>
            <hr />
          </div>}
        {/* messages */}
        {messageItemArray}
      </div>
    </div>
  )
}

function MessageItem(props) {
  const { userName, userImg, text } = props.messageData;
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = (event) => {
    console.log("you liked " + userName + "'s post!");
    setIsLiked(!isLiked);
  }

  let heartColor = 'grey';
  if (isLiked) {
    heartColor = 'red';
  }
  return (
    <div className="message d-flex mb-3">
      <div className="me-2">
        <img src={userImg} alt={userName + "'s avatar"} />
      </div>
      <div className="flex-grow-1">
        <p className="user-name">{userName}</p>
        <p>{text}</p>
        <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: heartColor }}>favorite_border</span>
        </button>
      </div>
    </div>
  )
}

// //Slide 35 (36 and 37) to elevate state to App
// import React, {useState} from 'react';

// export function ChatPane(props) {
// // const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
//   const currentChannel = props.currentChannel;

//   //only show current channel messages
//   const channelMessages = props.chatMessages.filter((msgObj) => {
//     return msgObj.channel === currentChannel;
//   })

//   const messageItemArray = channelMessages.map((messageObj) => {
//     const element = (
//       <MessageItem
//         messageData={messageObj}
//         key={messageObj.timestamp}
//       />
//     )
//     return element;
//   })

// const [count, setCount] = useState(0);

// console.log('calling chatpane')
  
// const handleClick = (event) => {
//   console.log("you clicked me!");
//     setCount(count+1);
//     console.log(count);
//     // addMessage("Click");
// }


// if (channelMessages.length === 0) {
//   return <p>No Messages Yet</p>
// }

// return (
//   <div className="scrollable-pane">
//     <div className="pt-2 my-2">
//       {/* testing button */}
//       <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
//         Click me: {count}
//       </button>
//       <hr />

//       {messageItemArray}
//     </div>
//   </div>
// )

// }

// function MessageItem(props) {
// const { userName, userImg, text } = props.messageData;

// const [isLiked, setIsLiked ] = useState(false);

// const handleClick = (event) => {
//   setIsLiked(!isLiked);
//   console.log("you liked " + userName + "'s post!");
// }

// let heartColor = 'grey';
// if (isLiked){
//   heartColor = 'red';
// }

// return (
//   <div className="message d-flex mb-3">
//     <div className="me-2">
//       <img src={userImg} alt={userName + "'s avatar"} />
//     </div>
//     <div className="flex-grow-1">
//       <p className="user-name">{userName}</p>
//       <p>{text}</p>
//       <button className="btn like-button" onClick={handleClick}>
//         <span className="material-icons" style={{ color: heartColor }}>favorite_border</span>
//       </button>
//     </div>
//   </div>
// )
// }

// //Post Lecture, add the Channel navigation (elevate state, etc)

// import React, {useState} from 'react';

// export function ChatPane(props) {
// // const [chatMessages, setChatMessages] = useState(CHAT_HISTORY);
//   const currentChannel = props.currentChannel;

//   //only show current channel messages
//   const channelMessages = props.chatMessages.filter((msgObj) => {
//     return msgObj.channel === currentChannel;
//   })

//   const messageItemArray = channelMessages.map((messageObj) => {
//     const element = (
//       <MessageItem
//         messageData={messageObj}
//         key={messageObj.timestamp}
//       />
//     )
//     return element;
//   })

// const [count, setCount] = useState(0);

// console.log('calling chatpane')
  
// const handleClick = (event) => {
//   console.log("you clicked me!");
//     setCount(count+1);
//     console.log(count);
//     // addMessage("Click");
// }


// if (channelMessages.length === 0) {
//   return <p>No Messages Yet</p>
// }

// return (
//   <div className="scrollable-pane">
//     <div className="pt-2 my-2">
//       {/* testing button */}
//       <button className="btn btn-outline-primary mb-3" onClick={handleClick}>
//         Click me: {count}
//       </button>
//       <hr />

//       {messageItemArray}
//     </div>
//   </div>
// )

// }

// function MessageItem(props) {
// const { userName, userImg, text } = props.messageData;

// const [isLiked, setIsLiked ] = useState(false);

// const handleClick = (event) => {
//   setIsLiked(!isLiked);
//   console.log("you liked " + userName + "'s post!");
// }

// let heartColor = 'grey';
// if (isLiked){
//   heartColor = 'red';
// }

// return (
//   <div className="message d-flex mb-3">
//     <div className="me-2">
//       <img src={userImg} alt={userName + "'s avatar"} />
//     </div>
//     <div className="flex-grow-1">
//       <p className="user-name">{userName}</p>
//       <p>{text}</p>
//       <button className="btn like-button" onClick={handleClick}>
//         <span className="material-icons" style={{ color: heartColor }}>favorite_border</span>
//       </button>
//     </div>
//   </div>
// )
// }