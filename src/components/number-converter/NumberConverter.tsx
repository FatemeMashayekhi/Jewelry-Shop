const NumberConverter = (number: number) => {
  return new Intl.NumberFormat("fa-IR").format(number);
};

export default NumberConverter;
