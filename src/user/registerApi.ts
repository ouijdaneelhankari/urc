import { Session, SessionCallback, ErrorCallback, User } from "../model/common";
import { CustomError } from "../model/CustomError";

export function registerUser(user: User, onResult: SessionCallback, onError: ErrorCallback) {
    fetch("/api/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then(async (response) => {
            if (response.ok) {
                const session = await response.json() as Session;
                sessionStorage.setItem('token', session.token);
                sessionStorage.setItem('externalId', session.externalId);
                sessionStorage.setItem('username', session.username || "");
                onResult(session);
            } else {
                const error = await response.json() as CustomError;
                onError(error);
            }
        })
        .catch((error) => {
            onError({ code: "NETWORK_ERROR", message: "Erreur réseau lors de l'inscription." } as CustomError);
        });
}
