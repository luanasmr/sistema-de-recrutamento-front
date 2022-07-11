import { useState } from "react";

// import jpIMG from "./Img/jp.svg"; 

import "./styles.css";
import GTranslateIcon from '@material-ui/icons/GTranslate';
import Login from "./Paginas/Login";
import Header from "./Components/Header"

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
    <Header/>
    </>
  );
}

export default App;
