import { useState } from "react";
import "./styles.css";
import GTranslateIcon from '@material-ui/icons/GTranslate';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Recrutamento Online </span>
            <div className="text-center">
              <span className="txt1">Bem vindo </span>
            </div>

            <span className="login-form-title">
              {/* <img src={jpIMG} alt="logo" /> */}
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="E-mail"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha"></span>
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn"> <GTranslateIcon></GTranslateIcon>logar com Google</button>
            </div>
            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <a className="txt2" href="#">
                Criar conta
              </a>
            </div>
            <div className="text-center">
            <span className="txt1">Todos os direitos reservados @Luanaalvesrn</span>
      </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;