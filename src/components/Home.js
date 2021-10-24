import React from 'react';
import { Container, Button } from 'react-bootstrap'
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import firebaseApp from '../Credentials';


import AddTask from './AddTask';
import TaskList from './TaskList';

const auth = getAuth(firebaseApp)
const fireStore = getFirestore(firebaseApp);

const Home = ({email}) => {
    //console.log(email)

    const fakeData = [
        {id:645445, descripcion:'tarea falsa 1', url:'https://picsum.photos/'},
        {id:645445, descripcion:'tarea falsa 2', url:'https://picsum.photos/'},
        {id:645445, descripcion:'tarea falsa 3', url:'https://picsum.photos/'},
        {id:645445, descripcion:'tarea falsa 4', url:'https://picsum.photos/'}
    ]

    async function searchOrCreate(idDocument) {
        //crear referencia
        const docRef = doc(fireStore, `usuarios/${idDocument}`);
        //buscar documento
        const res = await getDoc(docRef);
        //verificar si existe
        if(res.exists()){
            const infoDoc = res.data();
            return infoDoc.tareas;
        } else {
            setDoc(fireStore, { reacciones: [...fakeData]});
            const res = await getDoc(docRef);
            const infoDoc = res.data();
            return infoDoc.tareas;
        }

    }

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
