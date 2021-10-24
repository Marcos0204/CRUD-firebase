import React, { useState } from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";

// import firebaseApp from "../credenciales";
// // import {
// //   getAuth,
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   signInWithRedirect,
// //   GoogleAuthProvider,
// // } from "firebase/auth";
// // const auth = getAuth(firebaseApp);
//const googleProvider = new GoogleAuthProvider();

const Logueo = () => {
 
    const [ iseRegister, SetIsRegister ] = useState(false)

  return (
    
    <Container>
        <Stack gap={3}>
            <h1>{iseRegister ? 'Rigistrate' : 'inicia sesion'}</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="dark" type="submit">
                    {iseRegister ? 'Rigistrate' : 'inicia sesion'}
                </Button>
            </Form>
            <Button variant="primary" type="submit" style={{ width: "300px" }}>
                Acceder con Google
            </Button>
            <Button variant="secondary" onClick={() => SetIsRegister(!iseRegister)} style={{ width: "300px" }}>
            {iseRegister ? '¿No tienes cuanta? Rigistrate' : '¿Ya tienes cuenta? inicia sesion'}
            </Button>
        </Stack>
    </Container>
    
  );
};

export default Logueo;