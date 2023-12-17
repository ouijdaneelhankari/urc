// UsersAndChannelsList.js

import React from 'react';
import { User } from '../model/common';

interface UsersAndChannelsListProps {
  users: User[];
  channels: { id: number; name: string }[];
  handleUserClick: (userId: number) => void;
  handleChannelClick: (channelId: number) => void;
}

const UsersAndChannelsList: React.FC<UsersAndChannelsListProps> = ({
  users,
  channels,
  handleUserClick,
  handleChannelClick,
}) => {
  return (
    <div>
      <h2>Utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key={user.user_id} onClick={() => handleUserClick(user.user_id)}>
            {user.username}
          </li>
        ))}
      </ul>

      <h2>Salons</h2>
      <ul>
        {channels.map((channel) => (
          <li key={channel.id} onClick={() => handleChannelClick(channel.id)}>
            {channel.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersAndChannelsList;
