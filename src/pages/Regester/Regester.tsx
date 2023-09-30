import React, { useState } from "react";
import FirstBtn from "../../Components/Btns/FirstBtn";
import Input from "../../Components/Input/Input";
import {
  minValidator,
  maxValidator,
  emailValidator,
} from "../../Components/Validator/Rules";

function Regester() {
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const [disable, setDisable] = useState<boolean>(true);
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
        />
        <Input
          type="email"
          placeholder="email"
          id="email"
          validation={[minValidator(4), maxValidator(40), emailValidator()]}
        />
        <Input
          type="number"
          placeholder="number"
          id="number"
          validation={[minValidator(2)]}
        />
        <Input
          type="password"
          placeholder="password"
          id="password"
          validation={[minValidator(8)]}
        />
        <Input
          type="password"
          placeholder="repeat password"
          id="repetedpassword"
          validation={[minValidator(8)]}
        />
        <FirstBtn disable={disable} />
      </form>
    </section>
  );
}

export default Regester;
