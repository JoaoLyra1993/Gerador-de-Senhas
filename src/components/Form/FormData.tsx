import Senha from "../../services/GerarSenha";
import type { CheckboxValue } from "../../App";

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
    <div>
      <form action="">
        <p>Selecione uma ou mais opções:</p>
        <label>
          <input
            type="checkbox"
            id="check2"
            onChange={(e) => {
              handleCheckboxChange(e.target.id);
            }}
          />
          Letras maiúsculas e minúsculas
        </label>
        <label>
          <input
            type="checkbox"
            id="check3"
            onChange={(e) => {
              handleCheckboxChange(e.target.id);
            }}
          />
          Contendo números
        </label>
        <label>
          <input
            type="checkbox"
            id="check4"
            onChange={(e) => {
              handleCheckboxChange(e.target.id);
            }}
          />
          Caracteres especiais
        </label>
        <label>
          <input
            type="checkbox"
            id="check1"
            onChange={(e) => {
              handleCheckboxChange(e.target.id);
            }}
          />
          Mais de 12 caracteres
        </label>

        <button onClick={handleFormClick}>Gerar</button>
      </form>
    </div>
  );
};

export default DataForm;
