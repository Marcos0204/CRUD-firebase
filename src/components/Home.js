import React from 'react';
import { Container, Button } from 'react-bootstrap'
import { getAuth, signOut } from 'firebase/auth'
import firebaseApp from '../Credentials';

const auth = getAuth(firebaseApp)

const Home = () => {
    return (
        <Container>
            <h1>home</h1>
            <Button onClick={() => signOut(auth)}>
                Cerrar Sesion
            </Button>
        </Container>
    )
}

export default Home
