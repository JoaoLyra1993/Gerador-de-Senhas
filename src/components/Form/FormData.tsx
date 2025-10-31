import Senha from "../../services/GerarSenha";
import type { CheckboxValue } from "../../App";
import "./FormData.css";

interface DataFormProps {
  setPassword: (valor: string) => void;
  values: CheckboxValue[];
  setValues: (valor: CheckboxValue[]) => void;
}

type BooleanTuple4 = [boolean, boolean, boolean, boolean];

const DataForm = ({ setPassword, values, setValues }: DataFormProps) => {
  const handleFormClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const prop = values.map((valor) => {
      return valor.value;
    }) as BooleanTuple4;
    setPassword(Senha(...prop));
  };

  const handleCheckboxChange = (id: string) => {
    const novoValor = [...values];
    novoValor.map((valor) =>
      valor.id === id ? (valor.value = !valor.value) : valor.value
    );
    setValues(novoValor);
  };

  return (
    <div className="form-container">
      <form className="form-data">
        <p className="paragraph">
          Crie sua senha segura e personalizada, bastar selecionar uma ou mais
          opções:
        </p>
        <label className="all-lables">
          <input
            type="checkbox"
            id="check2"
            onChange={(e) => {
              handleCheckboxChange(e.target.id);
            }}
          />
          Letras maiúsculas e minúsculas
        </label>
        <label className="all-lables">
          <input
            type="checkbox"
            id="check3"
            onChange={(e) => {
              handleCheckboxChange(e.target.id);
            }}
          />
          Contendo números
        </label>
        <label className="all-lables">
          <input
            type="checkbox"
            id="check4"
            onChange={(e) => {
              handleCheckboxChange(e.target.id);
            }}
          />
          Caracteres especiais
        </label>
        <label className="all-lables">
          <input
            className="checkbox"
            type="checkbox"
            id="check1"
            onChange={(e) => {
              handleCheckboxChange(e.target.id);
            }}
          />
          Mais de 12 caracteres
        </label>
        <p className="paragraph center">Clique no botão abaixo para gerar.</p>
        <div className="div-but">
          <button onClick={handleFormClick} className="bt-gen-pass">
            Gerar
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataForm;
