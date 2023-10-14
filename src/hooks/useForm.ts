import { useReducer } from "react";
import { GetInputInfoType } from "../Components/Input/GetInputInfoType";

interface initiateInnerValueType {
  value: string;
  isValid: boolean;
}
interface initiateValueType {
  [key: string]: initiateInnerValueType;

  name: initiateInnerValueType;
  email: initiateInnerValueType;
  number: initiateInnerValueType;
  password: initiateInnerValueType;
  repetedPassword: initiateInnerValueType;
}
interface stateType {
  inputValue: initiateValueType;
  isFormValid: boolean;
}

interface actionType {
  type: string;
  id: string;
  value: string;
  isValid: boolean;
}

const formReducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case "CHANGE": {
      let isFormValid = true;
      for (const inputId in state.inputValue) {
        if (inputId === action.id) {
          isFormValid = isFormValid && action.isValid;
        } else {
          isFormValid = isFormValid && state.inputValue[inputId].isValid;
        }
      }
      return {
        inputValue: {
          ...state.inputValue,
          [action.id]: {
            value: action.value,
            isValid: action.isValid,
          },
        },
        isFormValid: isFormValid,
      };
    }
    default: {
      return state;
    }
  }
};

export const useForm = (
  inputValue: initiateValueType,
  isFormValid: boolean
): [stateType, GetInputInfoType] => {
  ///////importent
  const [formState, dispatch] = useReducer(formReducer, {
    inputValue,
    isFormValid,
  });

  const getInputInfo: GetInputInfoType = (id, value, isValid) => {
    dispatch({
      type: "CHANGE",
      id,
      value,
      isValid,
    });
  };

  return [formState, getInputInfo];
};
