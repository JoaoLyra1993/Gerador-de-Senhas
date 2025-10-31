import { useState } from "react";
import "./App.css";
import DataForm from "./components/Form/FormData";
import Senha from "./services/GerarSenha";
import PasswordForm from "./components/PasswordHolder/PasswordHolder";

export interface CheckboxValue {
  id: string;
  value: boolean;
}

function App() {
  // Dados iniciais
  const initialValues: CheckboxValue[] = [
    { id: "check1", value: false },
    { id: "check2", value: false },
    { id: "check3", value: false },
    { id: "check4", value: false },
  ];

  const [password, setPassword] = useState(Senha(true, true, true, true));
  const [values, setValues] = useState<CheckboxValue[]>(initialValues);

  return (
    <>
      <div className="main-container">
        <div className="title-container">
          <h1 className="title">Gerador de senhas</h1>
        </div>
        <div className="data-container">
          <PasswordForm password={password} />

          <DataForm
            setPassword={setPassword}
            values={values}
            setValues={setValues}
          />
        </div>
      </div>
    </>
  );
}

export default App;
