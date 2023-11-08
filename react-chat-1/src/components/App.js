import React from 'react';
import { HeaderBar } from './HeaderBar';
import { ChannelList } from './ChannelList'
import { ChatPane } from './ChatPane';


// export default function App(props) {
//   return (
//     <div>Hello App</div>
//   );
// }

// export default function App(props) {
//   return (
//     <div>
//       <HeaderBar />
//       <ChannelList/>
//       <ChatPane/>
//     </div>
//   );
// }


// export default function App(props) {
//   return (
//     <div>
//       <HeaderBar />
//       <ChannelList />
//       <ChatPane/>
//     </div>
//   );
// }

// // Example Slide 20

// export default function App(props) {

//   return (
//     <div>

//       <HeaderBar />
//       <div className='row'>
//         <div className='col-3'>
//           <ChannelList />
//         </div>
//         <main className='col'>
//           <ChatPane />
//         </main>
//       </div>
//     </div>
//   )
// };


// Example Slide 24 
export default function App(props) {
  const currentChannel = 'general';

  return (
    <div className='d-flex flex-column'>

      <HeaderBar />
      <div className='row flex-grow-1'>
        <div className='col-3'>
          <ChannelList currentChannel={currentChannel} />
        </div>
        <div className='col-6'>
          <ChatPane currentChannel={currentChannel}/>
        </div>
      </div>
    </div>
  )
};
