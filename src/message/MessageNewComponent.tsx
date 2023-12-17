// // // MessageListComponent.tsx
// // import React, { useState, useEffect } from "react";
// // import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
// // import { Message, ErrorCallback } from "../model/common";

// // // Fonction factice pour simuler un appel à l'API pour les messages
// // const fetchMessages = async (targetId: number | string): Promise<Message[]> => {
// //   // Simule un appel à l'API pour récupérer la liste des messages en fonction de l'utilisateur ou du salon
// //   // Remplacez cette logique par l'appel à votre API réelle
// //   return [
// //     { messageId: 1, content: 'Bonjour!', senderId: 2, timestamp: new Date() },
// //     { messageId: 2, content: 'Comment ça va?', senderId: 1, timestamp: new Date() },
// //     // ... Ajoutez autant de messages que nécessaire
// //   ];
// // };

// // interface MessageListComponentProps {
// //   targetId: number | string; // ID de l'utilisateur ou du salon
// //   targetType: 'user' | 'chatRoom'; // Type de la cible (utilisateur ou salon)
// // }

// // export function MessageListComponent({ targetId, targetType }: MessageListComponentProps) {
// //   const [messages, setMessages] = useState<Message[]>([]);

// //   useEffect(() => {
// //     // Utilisation du hook useEffect pour effectuer des actions après le rendu initial du composant
// //     // Simulation d'un appel à l'API pour récupérer les messages en fonction de la cible
// //     fetchMessages(targetId)
// //       .then((messagesData: Message[]) => setMessages(messagesData))
// //       .catch(handleError);
// //   }, [targetId, targetType]);

// //   // Gestionnaire d'erreurs
// //   const handleError: ErrorCallback = (error) => {
// //     console.error("Une erreur s'est produite lors de la récupération des messages :", error);
// //     // Gérer l'erreur, par exemple, afficher un message à l'utilisateur
// //   };

// //   // Rendu du composant
// //   return (
// //     <div>
// //       <Typography variant="h5">Liste des messages :</Typography>
// //       <List>
// //         {messages.map((message) => (
// //           <ListItem key={message.messageId}>
// //             <ListItemText primary={message.content} secondary={`Envoyé par ${message.senderId} le ${message.timestamp.toLocaleString()}`} />
// //           </ListItem>
// //         ))}
// //       </List>
// //     </div>
// //   );
// // }
// // MessageListComponent.tsx
// import React, { useState, useEffect } from "react";
// import { List, ListItem, ListItemText, Divider, Typography, TextField, Button } from '@mui/material';
// import { Message, ErrorCallback } from "../model/common";

// // Fonction factice pour simuler un appel à l'API pour les messages
// const fetchMessages = async (targetId: number | string): Promise<Message[]> => {
//   // Simule un appel à l'API pour récupérer la liste des messages en fonction de l'utilisateur ou du salon
//   // Remplacez cette logique par l'appel à votre API réelle
//   return [
//     { messageId: 1, content: 'Bonjour!', senderId: 2, timestamp: new Date() },
//     { messageId: 2, content: 'Comment ça va?', senderId: 1, timestamp: new Date() },
//     // ... Ajoutez autant de messages que nécessaire
//   ];
// };

// // Nouvelle fonction pour simuler l'envoi d'un message
// const sendMessage = async (targetId: number | string, content: string): Promise<void> => {
//   // Simule un appel à l'API pour envoyer un message
//   // Remplacez cette logique par l'appel à votre API réelle
//   console.log(`Message sent to ${targetId}: ${content}`);
// };

// interface MessageListComponentProps {
//   targetId: number | string; // ID de l'utilisateur ou du salon
//   targetType: 'user' | 'chatRoom'; // Type de la cible (utilisateur ou salon)
// }

// export function MessageListComponent({ targetId, targetType }: MessageListComponentProps) {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [newMessage, setNewMessage] = useState<string>('');

//   useEffect(() => {
//     // Utilisation du hook useEffect pour effectuer des actions après le rendu initial du composant
//     // Simulation d'un appel à l'API pour récupérer les messages en fonction de la cible
//     fetchMessages(targetId)
//       .then((messagesData: Message[]) => setMessages(messagesData))
//       .catch(handleError);
//   }, [targetId, targetType]);

//   // Gestionnaire d'erreurs
//   const handleError: ErrorCallback = (error) => {
//     console.error("Une erreur s'est produite lors de la récupération des messages :", error);
//     // Gérer l'erreur, par exemple, afficher un message à l'utilisateur
//   };

//   // Gestionnaire d'envoi de message
//   const handleSendMessage = async () => {
//     // Appeler la fonction pour envoyer le message
//     await sendMessage(targetId, newMessage);

//     // Actualiser la liste des messages (simuler un nouvel appel à l'API)
//     fetchMessages(targetId)
//       .then((messagesData: Message[]) => setMessages(messagesData))
//       .catch(handleError);

//     // Effacer le champ du nouveau message
//     setNewMessage('');
//   };

//   // Rendu du composant
//   return (
//     <div>
//       <Typography variant="h5">Liste des messages :</Typography>
//       <List>
//         {messages.map((message) => (
//           <ListItem key={message.messageId}>
//             <ListItemText primary={message.content} secondary={`Envoyé par ${message.senderId} le ${message.timestamp.toLocaleString()}`} />
//           </ListItem>
//         ))}
//       </List>
//       <TextField
//         label="Nouveau message"
//         variant="outlined"
//         value={newMessage}
//         onChange={(e) => setNewMessage(e.target.value)}
//       />
//       <Button variant="contained" color="primary" onClick={handleSendMessage}>
//         Envoyer
//       </Button>
//     </div>
//   );
// }
// MessageListComponent.tsx
import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText, Divider, Typography, TextField, Button } from '@mui/material';
import { Message, ErrorCallback } from "../model/common";

// Fonction factice pour simuler un appel à l'API pour les messages
const fetchMessages = async (targetId: number | string): Promise<Message[]> => {
  // Simule un appel à l'API pour récupérer la liste des messages en fonction de l'utilisateur ou du salon
  // Remplacez cette logique par l'appel à votre API réelle
  return [
   
  ];
};

// Nouvelle fonction pour simuler l'envoi d'un message
const sendMessage = async (targetId: number | string, content: string): Promise<void> => {
  // Simule un appel à l'API pour envoyer un message
  // Remplacez cette logique par l'appel à votre API réelle
  console.log(`Message sent to ${targetId}: ${content}`);
};

interface MessageListComponentProps {
  targetId: number | string; // ID de l'utilisateur ou du salon
  targetType: 'user' | 'chatRoom'; // Type de la cible (utilisateur ou salon)
}

export function MessageListComponent({ targetId, targetType }: MessageListComponentProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');

  useEffect(() => {
    // Utilisation du hook useEffect pour effectuer des actions après le rendu initial du composant
    // Simulation d'un appel à l'API pour récupérer les messages en fonction de la cible
    fetchMessages(targetId)
      .then((messagesData: Message[]) => setMessages(messagesData))
      .catch(handleError);
  }, [targetId, targetType]);

  // Gestionnaire d'erreurs
  const handleError: ErrorCallback = (error) => {
    console.error("Une erreur s'est produite lors de la récupération des messages :", error);
    // Gérer l'erreur, par exemple, afficher un message à l'utilisateur
  };

  // Gestionnaire d'envoi de message
  const handleSendMessage = async () => {
    // Appeler la fonction pour envoyer le message
    await sendMessage(targetId, newMessage);

    // Ajouter le nouveau message à la liste existante
    const newMessageItem: Message = {
      messageId: messages.length + 1, // ou utilisez un identifiant unique généré côté serveur
      content: newMessage,
      senderId: 1,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessageItem]);

    // Effacer le champ du nouveau message
    setNewMessage('');
  };

  // Rendu du composant
  return (
    <div>
      <Typography variant="h5">Liste des messages :</Typography>
      <List>
        {messages.map((message) => (
          <ListItem key={message.messageId}>
            <ListItemText primary={message.content} secondary={`Envoyé par ${message.senderId} le ${message.timestamp.toLocaleString()}`} />
          </ListItem>
        ))}
      </List>
      <TextField
        label="Nouveau message"
        variant="outlined"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Envoyer
      </Button>
    </div>
  );
}

