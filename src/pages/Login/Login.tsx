import Input from "../../Components/Input/Input";
import {
  minValidator,
  maxValidator,
  emailValidator,
} from "../../Components/Validator/Rules";
import { useForm } from "../../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import FirstBtn from "../../Components/Btns/FirstBtn";

export default function Login() {
  const navigate = useNavigate();

  const [formState, getInputInfo] = useForm(
    {
      email: { value: "", isValid: false },
      password: { value: "", isValid: false },
    },
    false
  );
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginData = {
      email: formState.inputValue.email.value,
      password: formState.inputValue.password.value,
    };
    fetch("https://api.storerestapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {

        console.log(json);
        if (json.status === 201) {
          navigate("/");
        } else {
          alert(json.message);
        }
      })
      .catch((m) => console.log(m));
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="p-10 shadow-md rounded-sm w-1/3"
        action="submit"
        onSubmit={submitForm}
      >
        <Input
          type="email"
          placeholder="email"
          id="email"
          validation={[minValidator(4), maxValidator(40), emailValidator()]}
          getInputInfo={getInputInfo}
        />
        <Input
          type="password"
          placeholder="password"
          id="password"
          validation={[minValidator(8)]}
          getInputInfo={getInputInfo}
        />

        <FirstBtn type={"submit"} disable={!formState.isFormValid} />
        <div className="mt-3 text-blue-500 ">
          <Link to="/regester">regester page</Link>
        </div>
      </form>
    </div>
  );
}
