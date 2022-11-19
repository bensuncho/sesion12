import { useState, useEffect } from "react";
import axios from "axios";
import { Table, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Lectura = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:4000/`).then((res) => setDatos(res.data));
  }, []);
  return (
    <Container>
      <h1> Lista de Frutas </h1>

      <Table>
        <thead>
          <th>id</th>
          <th>nombre</th>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.nombre}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
