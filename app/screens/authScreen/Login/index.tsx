import { useState } from "react";
import { Button } from "../../../components/Button";
import { useApp } from "../../../context/app";
import { Container, Input } from "./styles";

export function Login() {
    const { signIn } = useApp()
    const [email, setEmail] = useState<string>()

    function handleSignIn() {
        if (email) {
            signIn(email)
        }
    }

    return (
        <Container>
            <Input placeholder="E-mail" onChangeText={setEmail} />
            <Button title="Entrar" bgColor={'blue'} onPress={handleSignIn} />
        </Container>
    )
}