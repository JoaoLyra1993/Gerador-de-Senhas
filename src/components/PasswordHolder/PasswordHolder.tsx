import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineTextsms } from "react-icons/md";
import "./PasswordHolder.css";

interface PasswordFormProps {
  password: string;
}

const PasswordForm = ({ password }: PasswordFormProps) => {
  const [showPassword, setShowPassword] = useState(Boolean);

  //Função que inverte o estado
  const toggleVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  //Determina o tipo do input baseado no estado
  const inputType = showPassword ? "text" : "password";

  //Determina o ícone a ser exibido baseado no estado
  const icon = showPassword ? <RiLockPasswordLine /> : <MdOutlineTextsms />;

  return (
    <div className="password-container">
      <div className="container">
        <span className="password-span">Senha: </span>
        <input
          className="password-input"
          type={inputType}
          value={password}
          onChange={() => {}}
        />
      </div>
      <button
        type="button"
        id="toggleSenha"
        title="Mostrar/Ocultar Senha"
        onClick={toggleVisibility}
        className="toggle-bt"
      >
        {icon}
      </button>
    </div>
  );
};

export default PasswordForm;
