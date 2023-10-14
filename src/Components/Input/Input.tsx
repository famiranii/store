import { useReducer, useEffect } from "react";
import validator, { validationType } from "../Validator/Validator";
import "./Input.css";
import { GetInputInfoType } from "./GetInputInfoType";

type InputType = {
  type: string;
  placeholder: string;
  id: string;
  validation: validationType[];
  getInputInfo: GetInputInfoType;
};
type state = {
  value: string;
  isValid: boolean;
};
type action = {
  type: "CHANGE";
  value: string;
  validation: validationType[];
  isValid: boolean;
};

const inputReducer = (state: state, action: action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        value: action.value,
        isValid: validator(action.value, action.validation),
      };
    }
    default:
      return state;
  }
};

export default function Input(props: InputType) {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });
  const { value, isValid } = mainInput;
  const { id } = props;
  useEffect(() => {
    props.getInputInfo(id, value, isValid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const onchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validation: props.validation,
      isValid: true,
    });
  };

  return (
    <>
      <label
        htmlFor={props.id}
        className="block text-gray-700 text-md font-bold mt-5 mb-2 "
      >
        {props.placeholder}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        autoComplete="off"
        value={mainInput.value}
        className={`shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
       ${mainInput.isValid ? "border-lime-600" : "border-red-700"}
    `}
        onChange={onchangeHandler}
      />
    </>
  );
}
