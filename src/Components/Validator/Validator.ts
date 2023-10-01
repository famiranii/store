export type validationType = {
  value: string;
  max?: number;
  min?: number;
};

const validator = (value: string, validation: validationType[]): boolean => {
  for (const validator of validation) {
    if (validator.value === "MAX") {
      if (
        typeof validator.max !== "undefined" &&
        value.trim().length > validator.max
      ) {
        return false;
      }
    } else if (
      typeof validator.min !== "undefined" &&
      validator.value === "MIN"
    ) {
      if (value.trim().length < validator.min) {
        return false;
      }
    } else if (validator.value === "EMAIL") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    }
  }
  return true;
};

export default validator;
