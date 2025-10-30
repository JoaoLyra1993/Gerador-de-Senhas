import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineTextsms } from "react-icons/md";

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
      <label>
        Senha:
        <input type={inputType} value={password} onChange={() => {}} />
        <button
          type="button"
          id="toggleSenha"
          title="Mostrar/Ocultar Senha"
          onClick={toggleVisibility}
        >
          {icon}
        </button>
      </label>
    </div>
  );
};

export default PasswordForm;
