import React, { useState } from "react";
import { registerUser } from "./registerApi";
import { Session } from "../model/common";
import { CustomError } from "../model/CustomError";
import { Button, TextField } from '@mui/material';

export function Registration() {
    const [error, setError] = useState({} as CustomError);
    const [session, setSession] = useState({} as Session);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);

        try {
            const registrationData = {
                user_id: -1, // Placeholder value for user_id, adjust as needed
                username: data.get('username') as string,
                email: data.get('email') as string,
                password: data.get('password') as string
            };

            await registerUser(
                registrationData,
                (result) => {
                    console.log(result);
                    setSession(result);
                    form.reset();
                    setError(new CustomError(""));
                },
                (registrationError) => {
                    console.log(registrationError);
                    setError(registrationError);
                    setSession({} as Session);
                }
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextField name="username" label="Username" variant="outlined" margin="normal" fullWidth color="primary" />
                <TextField name="email" label="Email" type="email" variant="outlined" margin="normal" fullWidth />
                <TextField name="password" label="Password" type="password" variant="outlined" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="success" fullWidth style={{ borderRadius: 20 }}>
                    Inscription
                </Button>
            </form>
            {session.token && (
                <span>
                    {session.username} : {session.token}
                </span>
            )}
            {error.message && <span>{error.message}</span>}
        </>
    );
}
