// MessagingContext.tsx
import React, { createContext, useContext, useState, Dispatch, SetStateAction, ReactNode } from 'react';
import { User, Session, Message } from '../model/common';

interface MessagingContextProps {
  user: User | null;
  session: Session | null;
  messages: Message[];
  setUser: Dispatch<SetStateAction<User | null>>;
  setSession: Dispatch<SetStateAction<Session | null>>;
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

const MessagingContext = createContext<MessagingContextProps | undefined>(undefined);

export const MessagingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  const contextValue: MessagingContextProps = {
    user,
    session,
    messages,
    setUser,
    setSession,
    setMessages,
  };

  return (
    <MessagingContext.Provider value={contextValue}>
      {children}
    </MessagingContext.Provider>
  );
};

export const useMessagingContext = () => {
  const context = useContext(MessagingContext);
  if (!context) {
    throw new Error('useMessagingContext doit être utilisé à l\'intérieur de MessagingProvider');
  }
  return context;
};
