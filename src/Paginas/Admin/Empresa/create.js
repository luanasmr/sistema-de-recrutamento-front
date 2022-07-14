import { useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import _default from "react-bootstrap/Form";

const Create = () => {
  const [empresas, setEmpresas] = useState([])

  const fetchData = () => {
    fetch("http://127.0.0.1:8000/api/empresas/id")
      .then(response => {
        console.log(response);
        return response.json()

      })
      .then(data => {
        setEmpresas(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (

    <div className="row mt-6 pt-3">
      <h3><center>Cadastro de Empresas</center></h3>

      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome</Form.Label>
          <Form.Control value={this.state.nome} type="text" placeholder="Nome" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cnpj">
          <Form.Label>CNPJ</Form.Label>
          <Form.Control value={this.state.cnpj} type="text" placeholder="CNPJ" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Telefone">
          <Form.Label>Telefone</Form.Label>
          <Form.Control value={this.state.telefone} type="text" placeholder="telefone" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Endereco">
          <Form.Label>Endereço</Form.Label>
          <Form.Control value={this.state.endereco} type="text" placeholder="endereço" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>

    </div>
  );
}

export default Create;
