
// import React, { useState } from "react";
// import { loginUser } from "./loginApi";
// import { Session } from "../model/common";
// import { CustomError } from "../model/CustomError";
// import { Button, TextField } from '@mui/material';
// import { MessageListComponent } from '../message/MessageNewComponent';
// export function Login() {
//     const [error, setError] = useState({} as CustomError);
//     const [session, setSession] = useState({} as Session);

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         const form = event.currentTarget;
//         const data = new FormData(form);
//         loginUser(
//             { user_id: -1, username: data.get('login') as string, password: data.get('password') as string },
//             (result: Session) => {
//                 console.log(result);
//                 setSession(result);
//                 form.reset();
//                 setError(new CustomError(""));
//             },
//             (loginError: CustomError) => {
//                 console.log(loginError);
//                 setError(loginError);
//                 setSession({} as Session);
//             }
//         );
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <TextField name="login" label="Login" variant="outlined" margin="normal" fullWidth color="primary" />
//                 <TextField name="password" label="Password" type="password" variant="outlined" margin="normal" fullWidth />
//                 <Button type="submit" variant="contained" color="success" fullWidth style={{ borderRadius: 20 }}>
//                     Connexion
//                 </Button>
//             </form>
//             {session.token && (
//     <>
//         <span>
//             {session.username} : {session.token}
//         </span>
//         <MessageListComponent targetId={1} targetType="user" />
//         {/* Remplacez someId par la valeur appropriée pour targetId */}
//     </>
// )}
// {error.message && <span>{error.message}</span>}

//         </>
//     );
// }
import React, { useState } from "react";
import { loginUser } from "./loginApi";
import { Session } from "../model/common";
import { CustomError } from "../model/CustomError";
import { Button, TextField } from '@mui/material';
import { MessageListComponent } from '../message/MessageNewComponent';
 import {ChatComponent} from "../message/chatComponent";
export function Login() {
    const [error, setError] = useState({} as CustomError);
    const [session, setSession] = useState({} as Session);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Nouvel état pour suivre l'état de la connexion

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);
        loginUser(
            { user_id: -1, username: data.get('login') as string, password: data.get('password') as string },
            (result: Session) => {
                console.log(result);
                setSession(result);
                form.reset();
                setError(new CustomError(""));
                // Mettre à jour l'état pour indiquer que la connexion est réussie
                setIsAuthenticated(true);
            },
            (loginError: CustomError) => {
                console.log(loginError);
                setError(loginError);
                setSession({} as Session);
            }
        );
    };

    // Si l'authentification est réussie, affichez le composant MessageListComponent à la place du formulaire
    if (isAuthenticated) {
        // return <MessageListComponent targetId={1} targetType="user" />;
        return <ChatComponent/>;
    }

    // Le reste de votre code pour le formulaire de connexion
    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField name="login" label="Login" variant="outlined" margin="normal" fullWidth color="primary" />
                <TextField name="password" label="Password" type="password" variant="outlined" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="success" fullWidth style={{ borderRadius: 20 }}>
                    Connexion
                </Button>
            </form>
            {error.message && <span>{error.message}</span>}
        </>
    );
}
