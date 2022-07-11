import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Create() {
  return (
   
    <Form>
      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Nome</Form.Label>
        <Form.Control type="text" placeholder="Nome" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCnpj">
        <Form.Label>CNPJ</Form.Label>
        <Form.Control type="number" placeholder="CNPJ" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicTelefone">
        <Form.Label>Telefone</Form.Label>
        <Form.Control type="text" placeholder="Telefone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEndereco">
        <Form.Label>Endereço</Form.Label>
        <Form.Control type="text" placeholder="Endereço" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
  );
}

export default Create;