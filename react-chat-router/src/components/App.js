// import React, { useState } from 'react';

// import { HeaderBar } from './HeaderBar.js';

// import ChatPage from './ChatPage';
// import SignInPage from './SignInPage';
// import * as Static from './StaticPages';

// import DEFAULT_USERS from '../data/users.json';

// //A component!
// export default function App(props) {
//   //state
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1]) //default to null user

//   const loginUser = (userObj) => {
//     console.log("logging in as", userObj.userName);
//     setCurrentUser(userObj);
//   }

//   //what content should my App look like?
//   return (
//     <div className="container-fluid d-flex flex-column">
//       <HeaderBar currentUser={currentUser} />

//       {/* <ChatPage currentUser={currentUser} /> */}
//       {/* <SignInPage currentUser={currentUser} loginCallback={loginUser} /> */}
//       {/* <Static.WelcomePage /> */}
//       {/* <Static.AboutPage /> */}
//       {/* <Static.ErrorPage /> */}

//     </div>
//   );
// }

// //Slide 18 - Updating for Routes and Route's
// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { HeaderBar } from './HeaderBar.js';
// import ChatPage from './ChatPage';
// import SignInPage from './SignInPage';
// import * as Static from './StaticPages';

// import DEFAULT_USERS from '../data/users.json';

// export default function App(props) {
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1])

//   const loginUser = (userObj) => {
//     setCurrentUser(userObj);
//   }

//   return (

//     <div className="container-fluid d-flex flex-column">

//       <HeaderBar currentUser={currentUser} />
//       <Routes>
//         <Route  index element={<Static.WelcomePage />} />

//         <Route path="chat" element={<ChatPage
//           currentUser={currentUser} />} />

//         <Route path="signin" element={<SignInPage
//           currentUser={currentUser} loginCallback={loginUser} />} />

//         <Route path="about" element={<Static.AboutPage />} />

//         <Route path="*" element={<Static.ErrorPage />} />
//       </Routes>

//     </div>
//   );
// }

// //Slide 23 - Nesting Routes
// import React, { useState } from 'react';
// import { Routes, Route, Outlet } from 'react-router-dom';
// import { HeaderBar } from './HeaderBar.js';
// import ChatPage from './ChatPage';
// import SignInPage from './SignInPage';
// import * as Static from './StaticPages';

// import DEFAULT_USERS from '../data/users.json';

// export default function App(props) {
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1])

//   const loginUser = (userObj) => {
//     setCurrentUser(userObj);
//   }

//   return (

//     <div className="container-fluid d-flex flex-column">

//       {/* <HeaderBar currentUser={currentUser} /> */}
//       <Routes>
//         <Route index element={<Static.WelcomePage />} />
//         <Route path="app" element={<AppLayout currentUser={currentUser} />}>
//           <Route path="chat" element={<ChatPage currentUser={currentUser} />} />
//           <Route path="signin" element={<SignInPage
//             currentUser={currentUser} loginCallback={loginUser} />} />
//           <Route path="about" element={<Static.AboutPage />} />
//           <Route path="*" element={<Static.ErrorPage />} />
//         </Route>
//       </Routes>

//     </div>
//   );
// }

// function AppLayout(props) {
//   return (
//     <>
//       <HeaderBar currentUser={props.currentUser} />
//       <Outlet />
//     </>
//   )
// }

// //Slide 27 - Protected Routes
// import React, { useState } from 'react';
// import { Routes, Route, Outlet } from 'react-router-dom';
// import { HeaderBar } from './HeaderBar.js';
// import ChatPage from './ChatPage';
// import SignInPage from './SignInPage';
// import * as Static from './StaticPages';

// import DEFAULT_USERS from '../data/users.json';

// export default function App(props) {
//   const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1])

//   const loginUser = (userObj) => {
//     setCurrentUser(userObj);
//   }

//   return (

//     <div className="container-fluid d-flex flex-column">

//       <HeaderBar currentUser={currentUser} />
//       <Routes>
//         <Route index element={<Static.WelcomePage />} />
//         <Route path="about" element={<Static.AboutPage />} />
//         <Route path="*" element={<Static.ErrorPage />} />
//         <Route path="signin" element={<SignInPage
//             currentUser={currentUser} loginCallback={loginUser} />} />

//         <Route element={<RequireAuth currentUser={currentUser} />}>
//           <Route path="chat" element={<ChatPage currentUser={currentUser} />} />

//         </Route>
//       </Routes>

//     </div>
//   );
// }


// function RequireAuth(props){
//    //...determine if user is logged in
//    if(props.currentUser.userId === null) { //if no user, say so
//     return <p>Forbidden!</p>
//   }
//   else { //otherwise, show the child route content
//     return <Outlet />
//   }
// }

//Slide 36 - Url Params
import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { HeaderBar } from './HeaderBar.js';
import ChatPage from './ChatPage';
import SignInPage from './SignInPage';
import * as Static from './StaticPages';

import DEFAULT_USERS from '../data/users.json';

export default function App(props) {
  const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[1])

  const loginUser = (userObj) => {
    setCurrentUser(userObj);
  }

  return (

    <div className="container-fluid d-flex flex-column">

      <HeaderBar currentUser={currentUser} />
      <Routes>
        <Route index element={<Static.WelcomePage />} />
        <Route path="about" element={<Static.AboutPage />} />
        <Route path="*" element={<Static.ErrorPage />} />
        <Route path="signin" element={<SignInPage
            currentUser={currentUser} loginCallback={loginUser} />} />

        <Route element={<RequireAuth currentUser={currentUser} />}>
          <Route path="chat/:channelName" element={<ChatPage currentUser={currentUser} />} />
          <Route path="chat" element={<ChatPage currentUser={currentUser} />} />
        </Route>
      </Routes>

    </div>
  );
}


function RequireAuth(props){
   //...determine if user is logged in
   if(props.currentUser.userId === null) { //if no user, say so
    return <p>Forbidden!</p>
  }
  else { //otherwise, show the child route content
    return <Outlet />
  }
}