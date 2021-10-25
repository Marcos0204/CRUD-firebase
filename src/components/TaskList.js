import React from 'react'
import { Stack, Container, Row, Col, Button} from 'react-bootstrap';
import firebaseApp from '../Credentials';
import { getFirestore, updateDoc, doc } from 'firebase/firestore';

const fireStore = getFirestore(firebaseApp);

const TaskList = ({taskList, setTask, email}) => {

    function deleteTask(id) {
        //crear el nuevo array de tareas
        const newArray = taskList.filter((item) => item.id !== id);
        console.log(newArray)
        setTask(newArray)

        //actualizar base de datos
        const docuRef = doc(fireStore, `usuarios/${email}`);

        updateDoc(docuRef, { tareas: [...newArray]})

        setTask(newArray)
    }
    return (
        <Container>
            <Stack>
                {taskList.map((item )=> (
                    < >
                        <Row key={item.id}>
                            <Col>{item.descripcion}</Col>
                            <Col>
                                <Button>ver archivo</Button>
                            </Col>
                            <Col>
                                <Button onClick={() => deleteTask(item.id)}>eliminar Tarea</Button>
                            </Col>
                        </Row>
                        <hr/>
                    </>)
                )}
            </Stack>
        </Container>
    )
}

export default TaskList
