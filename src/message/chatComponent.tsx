


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
