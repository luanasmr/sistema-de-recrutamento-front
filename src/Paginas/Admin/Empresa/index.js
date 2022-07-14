import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Table from 'react-bootstrap/Table';

const UsingFetch = () => {
  const [empresas, setEmpresas] = useState([])

  const fetchData = () => {
    fetch("http://127.0.0.1:8000/api/empresas")
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
      <h3><center>Empresas Cadastradas</center></h3>
      {empresas.length > 0 && (
         <Table striped bordered hover>
          {empresas.map(empresa => (
            <>
         <thead>
           <tr>
             <th>Nome</th>
             <th>CNPJ</th>
             <th>Telefone</th>
             <th>Endereço</th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <td key={empresa.id}>{empresa.nome}</td>
             <td key={empresa.id}>{empresa.cnpj}</td>
             <td key={empresa.id}>{empresa.telefone}</td>
             <td key={empresa.id}>{empresa.endereco}</td>
           </tr>
         </tbody>
      
        </>
          ))}
           </Table>
      )}
    </div>
  )
}
export default UsingFetch;

