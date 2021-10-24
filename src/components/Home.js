import React from 'react';
import { Container, Button } from 'react-bootstrap'
import { getAuth, signOut } from 'firebase/auth'
import firebaseApp from '../Credentials';
import AddTask from './AddTask';
import TaskList from './TaskList';

const auth = getAuth(firebaseApp)

const Home = () => {

    const fakeData = [
        {id:645445, descripcion:'tarea falsa 1', url:'https://picsum.photos/'},
        {id:645445, descripcion:'tarea falsa 2', url:'https://picsum.photos/'},
        {id:645445, descripcion:'tarea falsa 3', url:'https://picsum.photos/'},
        {id:645445, descripcion:'tarea falsa 4', url:'https://picsum.photos/'}
    ]

    return (
        <Container>
            <h1>home</h1>
            <Button onClick={() => signOut(auth)}>
                Cerrar Sesion
            </Button>
            <hr/>
            <AddTask/>
            <TaskList 
                taskList={fakeData}
            />
        </Container>
    )
}

export default Home
