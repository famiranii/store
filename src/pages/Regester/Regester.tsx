import React, { useEffect, useState } from "react";
import FirstBtn from "../../Components/Btns/FirstBtn";
import Input from "../../Components/Input/Input";
import {
  minValidator,
  maxValidator,
  emailValidator,
} from "../../Components/Validator/Rules";
import { useForm } from "../../hooks/useForm";

function Regester() {
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const [disable, setDisable] = useState<boolean>(true);

  const [formState, getInputInfo] = useForm(
    {
      name: { value: "", isValid: false },
      email: { value: "", isValid: false },
      number: { value: "", isValid: false },
      password: { value: "", isValid: false },
      repetedpassword: { value: "", isValid: false },
    },
    false
  );
  useEffect(() => {
    if (formState.isFormValid) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [formState.isFormValid]);

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
          id="repetedpassword"
          validation={[minValidator(8)]}
          getInputInfo={getInputInfo}
        />
        <FirstBtn disable={disable} />
      </form>
    </section>
  );
}

export default Regester;
