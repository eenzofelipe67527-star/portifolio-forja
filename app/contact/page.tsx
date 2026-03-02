"use client";

import { error } from "console";
import { useEffect, useState, useMemo } from "react";

export default function Contact() {
    const [email, setEmail] = useState("");
    const error = useMemo(() => {
        return !email.includes("@")
    }, [email]);

    /*    const [error, setError] = useState(false);
    
  useEffect(() => {

     }, [email]);*/

    function getEmail() {
        if (email.includes("gmail.com")) {
            console.log("Email inválido");
            window.open(`https://wa.me/5541999999999?text=Olá, meu email é ${email}`);
            return
        }
    }

    return (
        <main className="w-screen h-screen flex flex-col gap-16 items-center justify-center">
            <h1 className="text-6xl">Contato</h1>

            <div>
                <p>Digite seu email para eu entrar em contato!</p>
                <input type="email"
                    className=" border border-white"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="text-red-500">Email inválido</p>}

            </div>

            <button className="cursor-pointer border border-white py-2 px-10 rounded-full disabled:cursor-not-allowed"
                onClick={() => getEmail()}
                disabled={error}>Enviar</button>
        </main>
    )
}