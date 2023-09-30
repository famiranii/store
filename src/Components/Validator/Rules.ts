export const minValidator = (min: number) => ({
  value: "MIN",
  min,
});
export const maxValidator = (max: number) => ({
  value: "MAX",
  max,
});
export const emailValidator = () => ({
  value: "EMAIL",
});