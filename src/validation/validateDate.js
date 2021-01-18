const validateDate = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!(/^((19|20)\d{2})-((0|1)\d{1})-((0|1|2)\d{1})/g.test(value))) {
    error = 'Date of Birth Invalid';
  }
  return error;
};
export default validateDate;
