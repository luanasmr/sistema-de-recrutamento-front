// import { Create } from "@material-ui/icons";
import { useState } from "react";
import Header from "./Components/Header"
import Create from "./Paginas/Admin/Empresa/create";

import "./styles.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <Header/>
    <Create/>
    </>
  );
}

export default App;
