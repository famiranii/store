import FirstBtn from "../../Components/Btns/FirstBtn";
import Input from "../../Components/Input/Input";
import { useNavigate } from "react-router-dom";
import {
  minValidator,
  maxValidator,
  emailValidator,
} from "../../Components/Validator/Rules";
import { useForm } from "../../hooks/useForm";

function Regester() {
  const navigate = useNavigate();

  const [formState, getInputInfo] = useForm(
    {
      name: { value: "", isValid: false },
      email: { value: "", isValid: false },
      number: { value: "", isValid: false },
      password: { value: "", isValid: false },
      repetedPassword: { value: "", isValid: false },
    },
    false
  );
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const regesterData = {
      name: formState.inputValue.name.value,
      email: formState.inputValue.email.value,
      number: formState.inputValue.number.value,
      password: formState.inputValue.password.value,
      password_repeat: formState.inputValue.repetedPassword.value,
    };
    fetch("https://api.storerestapi.com/auth/register", {
      method: "POST",
      body: JSON.stringify(regesterData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        localStorage.setItem("username", formState.inputValue.name.value);
        navigate('/')
      });
  };

  return (
    <section className="h-screen w-full flex justify-center items-center direct">
      <form
        className="p-10 shadow-md rounded-sm w-1/3"
        action="submit"
        onSubmit={submitForm}
      >
        <Input
          type="text"
          placeholder="name"
          id="name"
          validation={[minValidator(6), maxValidator(25)]}
          getInputInfo={getInputInfo}
        />
        <Input
          type="email"
          placeholder="email"
          id="email"
          validation={[minValidator(4), maxValidator(40), emailValidator()]}
          getInputInfo={getInputInfo}
        />
        <Input
          type="number"
          placeholder="number"
          id="number"
          validation={[minValidator(2)]}
          getInputInfo={getInputInfo}
        />
        <Input
          type="password"
          placeholder="password"
          id="password"
          validation={[minValidator(8)]}
          getInputInfo={getInputInfo}
        />
        <Input
          type="password"
          placeholder="repeat password"
          id="repetedPassword"
          validation={[minValidator(8)]}
          getInputInfo={getInputInfo}
        />
        <FirstBtn type={"submit"} disable={!formState.isFormValid} />
      </form>
    </section>
  );
}

export default Regester;
