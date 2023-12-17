

// // ChatComponent.tsx
// import React, { useState, useEffect } from "react";
// import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
// import { User } from "../model/common";
// import usersData from '../user/users.json';  // Assurez-vous que le chemin est correct
// import { Link } from 'react-router-dom';
// import { createBrowserHistory } from 'history'; // Import the createBrowserHistory function

// export function ChatComponent() {
//   const [users, setUsers] = useState<User[]>([]);
//   const history = createBrowserHistory(); // Create a browser history instance

//   useEffect(() => {
//     setUsers(usersData);
//   }, []);

//   const handleUserClick = (userId: number) => {
//     // Redirect the user to the MessageListComponent with the user ID
//     history.push(`/messages/user/${userId}`);
//   };

//   return (
//     <div>
//       <Typography variant="h5">Liste des utilisateurs :</Typography>
//       <List>
//         {users.map((user) => (
//           <ListItem key={user.user_id} button onClick={() => handleUserClick(user.user_id)}>
//             <ListItemText primary={user.username} />
//           </ListItem>
//         ))}
//       </List>

//       <Divider />
//     </div>
//   );
// }

// ChatComponent.tsx

// import {MessageListComponent} from './MessageNewComponent';

// // ChatComponent.tsx
// import React, { useState, useEffect } from "react";
// import { List, ListItem, ListItemText, Divider, Typography, Link } from '@mui/material';
// import { User } from "../model/common";
// import usersData from '../user/users.json';
// import { createBrowserHistory } from 'history';

// export function ChatComponent() {
//   const [users, setUsers] = useState<User[]>([]);
//   const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
//   const history = createBrowserHistory();

//   useEffect(() => {
//     setUsers(usersData);
//   }, []);

//   const handleUserClick = (userId: number) => {
//     setSelectedUserId(userId);
//   };

//   return (
//     <div>
//       <Typography variant="h5">Liste des utilisateurs :</Typography>
//       <List>
//         {users.map((user) => (
//           <ListItem key={user.user_id}>
//             {/* Use onClick to handle the click event */}
//             <Link href="#" onClick={() => handleUserClick(user.user_id)}>
//               <ListItemText primary={user.username} />
//             </Link>

//             {/* Conditionally render MessageListComponent */}
//             {selectedUserId === user.user_id && (
//               <MessageListComponent targetId={user.user_id} targetType="user" />
//             )}
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//     </div>
//   );
// }
// ChatComponent.tsx
// ChatComponent.tsx
import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText, Divider, Typography, Link } from '@mui/material';
import { User } from "../model/common";
import usersData from '../user/users.json';
import { createBrowserHistory } from 'history';
import { MessageListComponent } from './MessageNewComponent';

export function ChatComponent() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const history = createBrowserHistory();

  useEffect(() => {
    setUsers(usersData);
  }, []);

  const handleUserClick = (userId: number) => {
    setSelectedUserId(userId);
  };

  return (
    <div>
      <Typography variant="h5">Liste des utilisateurs :</Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user.user_id}>
            {/* Use onClick to handle the click event */}
            <Link href="#" onClick={() => handleUserClick(user.user_id)}>
              <ListItemText primary={user.username} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />

      {/* Conditionally render MessageListComponent based on selectedUserId */}
      {selectedUserId !== null && (
        <MessageListComponent targetId={selectedUserId} targetType="user" />
      )}
    </div>
  );
}
