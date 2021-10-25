/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap'
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import firebaseApp from '../Credentials';


import AddTask from './AddTask';
import TaskList from './TaskList';

const auth = getAuth(firebaseApp)
const fireStore = getFirestore(firebaseApp);

const Home = ({email}) => {
    
    const [ task, setTask ] = useState(null)

    const fakeData = [
        {id:645487694564565465, descripcion:'tarea falsa 1', url:'https://picsum.photos/'},
        {id:64544354684534545, descripcion:'tarea falsa 2', url:'https://picsum.photos/'},
        {id:645546787867558777445, descripcion:'tarea falsa 3', url:'https://picsum.photos/'},
        {id:6454243783683563586358/67/87534545, descripcion:'tarea falsa 4', url:'https://picsum.photos/'}
    ]

    async function searchOrCreate(idDocumento) {
        //crear referencia al documento
        const docuRef = doc(fireStore, `usuarios/${idDocumento}`);
        // buscar documento
        const consulta = await getDoc(docuRef);
        // revisar si existe
        if (consulta.exists()) {
          // si sí existe
          const infoDocu = consulta.data();
          return infoDocu.tareas;
        } else {
          // si no existe
          await setDoc(docuRef, { tareas: [...fakeData] });
          const consulta = await getDoc(docuRef);
          const infoDocu = consulta.data();
          return infoDocu.tareas;
        }
      }

    useEffect(() => {
        async function fetchTask(){
            const res = await searchOrCreate(email);
            setTask(res)
        }
        fetchTask()
    }, [email])

    return (
        <Container>
            <h1>home</h1>
            <Button onClick={() => signOut(auth)}>
                Cerrar Sesion
            </Button>
            <hr/>
            <AddTask/>
            {task ? <TaskList 
                        taskList={task}
                        email={email}
                        setTask={setTask}
                    /> : null}
        </Container>
    )
}

export default Home
