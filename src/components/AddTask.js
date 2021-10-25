import React, {useState} from 'react';
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import firebaseApp from '../Credentials';
import { getFirestore, updateDoc , doc } from 'firebase/firestore';

const fireStore = getFirestore(firebaseApp);


const AddTask = ({taskList, setTask, email}) => {
    const [ descripcion , setDescripcion ] = useState('')

    function addTaskDB(e) {
        e.preventDefault()
        //const descripcion = e.target.formDescripcion.value;
        const newArray = [
            ...taskList,
            {id: +new Date(),
            descripcion,
            url:'https://picsum.photos/'}
        ]

        const docuRef = doc(fireStore, `usuarios/${email}`);

        updateDoc(docuRef, { tareas: [...newArray]})
        setTask(newArray)
        setDescripcion('')
    }
    return (
        <Container>
      <Form >
        <Row className="mb-5">
          <Col>
            <Form.Control
              type="text"
              value={descripcion}
              placeholder="Describe tu tarea"
              id="formDescripcion"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              type="file"
              placeholder="Añade archivo"
            
            />
          </Col>
          <Col>
            <Button type="submit" onClick={addTaskDB}> AgregarTarea</Button>
          </Col>
        </Row>
      </Form>
      <hr />
    </Container>
    )
}

export default AddTask
