// import { Create } from "@material-ui/icons";
// import { useState } from "react";
import Header from "./Components/Header";
import Routes from "./Routes";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  return (
    <BrowserRouter>
    <Header/>
    <Routes/>
    </BrowserRouter>
  
  );
}

export default App;
