import { db } from '@vercel/postgres';
import { kv } from "@vercel/kv";
import { arrayBufferToBase64, stringToArrayBuffer } from "../lib/base64";

export const config = {
    runtime: 'edge',
};

// export default async function handler(request) {
//     try {
//         const { username, email, password } = await request.json(); // Ajout de l'email pour l'inscription
//         const hash = await crypto.subtle.digest('SHA-256', stringToArrayBuffer(username + password));
//         const hashed64 = arrayBufferToBase64(hash);

//         const client = await db.connect();

//         // Vérifier si l'utilisateur existe déjà
//         const existingUser = await client.sql`select * from users where username = ${username}`;
//         if (existingUser.rowCount > 0) {
//             const error = { code: "CONFLICT", message: "Nom d'utilisateur déjà utilisé." };
//             return new Response(JSON.stringify(error), {
//                 status: 409,
//                 headers: { 'content-type': 'application/json' },
//             });
//         }

//         // Insérer un nouvel utilisateur dans la base de données
//         const { rowCount, rows } = await client.sql`insert into users (username, email, password) values (${username}, ${email}, ${hashed64}) returning *`;
//         if (rowCount !== 1) {
//             const error = { code: "INTERNAL_SERVER_ERROR", message: "Erreur 1." };
//             return new Response(JSON.stringify(error), {
//                 status: 500,
//                 headers: { 'content-type': 'application/json' },
//             });
//         }

//         // Générer un token et gérer les informations de session
//         const token = crypto.randomUUID().toString();
//         const user = { id: rows[0].user_id, username: rows[0].username, email: rows[0].email, externalId: rows[0].external_id }
//         await kv.set(token, user, { ex: 3600 });
//         const userInfo = {};
//         userInfo[user.id] = user;
//         await kv.hset("users", userInfo);

//         return new Response(JSON.stringify({ token, username, externalId: rows[0].external_id, id: rows[0].user_id }), {
//             status: 201,
//             headers: { 'content-type': 'application/json' },
//         });
//     } catch (error) {
//         console.error(error);
//         return new Response(JSON.stringify({ code: "INTERNAL_SERVER_ERROR", message: "Erreur 2." }), {
//             status: 500,
//             headers: { 'content-type': 'application/json' },
//         });
//     }
// };
export default async function handler(request) {
   // try {
        const { username, email, password } = await request.json();
        console.log("Received request:", { username, email });

        const hash = await crypto.subtle.digest('SHA-256', stringToArrayBuffer(username + password));
        const hashed64 = arrayBufferToBase64(hash);

        const client = await db.connect();

        const existingUser = await client.sql`select * from users where username = ${username}`;
        if (existingUser.rowCount > 0) {
            const conflictError = { code: "CONFLICT", message: "Nom d'utilisateur déjà utilisé." };
            console.log("Conflict Error:", conflictError);
            return new Response(JSON.stringify(conflictError), {
                status: 409,
                headers: { 'content-type': 'application/json' },
            });
        }

        const { rowCount, rows } = await client.sql`insert into users (username, email, password) values (${username}, ${email}, ${hashed64}) returning *`;
        if (rowCount !== 1) {
            const internalError = { code: "INTERNAL_SERVER_ERROR", message: "Erreur 1." };
            console.log("Internal Error 1:", internalError);
            return new Response(JSON.stringify(internalError), {
                status: 500,
                headers: { 'content-type': 'application/json' },
            });
        }

        const token = crypto.randomUUID().toString();
        const user = { id: rows[0].user_id, username: rows[0].username, email: rows[0].email, externalId: rows[0].external_id };
        await kv.set(token, user, { ex: 3600 });
        const userInfo = {};
        userInfo[user.id] = user;
        await kv.hset("users", userInfo);

        console.log("User successfully registered:", { token, username, externalId: rows[0].external_id, id: rows[0].user_id });
        return new Response(JSON.stringify({ token, username, externalId: rows[0].external_id, id: rows[0].user_id }), {
            status: 201,
            headers: { 'content-type': 'application/json' },
        });
    // } catch (error) {
    //     console.error("Internal Error 2:", error);
    
    //     // Ajouter cette ligne pour imprimer l'erreur d'origine dans la console
    //     console.error("Original Error:", error);
    
    //     return new Response(JSON.stringify({ code: "INTERNAL_SERVER_ERROR", message: "Erreur 2." }), {
    //         status: 500,
    //         headers: { 'content-type': 'application/json' },
    //     });
     }
    
    

