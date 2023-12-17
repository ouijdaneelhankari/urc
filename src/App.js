
// import './App.css';
// import {ChatComponent} from "./message/chatComponent";
// import {MessageListComponent} from "./message/MessageNewComponent";
// import {MessagingProvider} from "./message/MessagingContext";
// import {Login} from "./user/Login";
// // import {MessagingState} from "./message/MessagingState";
// import {Registration} from "./user/inscription";
// import * as React from 'react';
// import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

// function App() {

//   return (
//       <Router>
//       <div className="navigation-links">
//         <ul>
//           <li>
//             <Link to="/h">Home    </Link>
//             <Link to="/i">inscription   </Link>
//             <Link to="/l">messagelist     </Link>
//             <Link to="/m">message    </Link>
//             <Link to="/n">message context   </Link>
           
           
//           </li>
        
//         </ul>

//         <hr />
//         <Routes>
//           <Route exact path="/h" element={<Login />} />
//           <Route exact path="/i" element={<Registration/>} />
        
//           <Route exact path="/l" element={<ChatComponent/>} />
//           <Route exact path="/m" element={<MessageListComponent/>} />
//           <Route exact path="/n" element={<MessagingProvider/>} />
         
       
          
          
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import { ChatComponent } from './message/chatComponent';
import { MessageListComponent } from './message/MessageNewComponent';
import { MessagingProvider } from './message/MessagingContext';
import { Login } from './user/Login';
import { Registration } from './user/inscription';
import './App.css';


function App() {
  return (
    <Router>
      <div className="navigation-bar">
        <nav>
          <ul className="horizontal-menu">
            <li>
              <Link to="/login">Connexion</Link>
            </li>
            <li>
              <Link to="/inscription">Inscription</Link>
         </li>
          </ul>
        </nav>

        <hr />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/inscription" element={<Registration />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;

