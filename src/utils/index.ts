const generateObjectId = () => {
  const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (
    timestamp +
    "xxxxxxxxxxxxxxxx"
      .replace(/[x]/g, () => {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
};

const numberWithCommas = (number: number | string) => {
  const _commas = ",";

  let strNumber = number.toString(),
    parts = strNumber.split("."),
    integerPart = parts[0],
    formattedNumber = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, _commas);

  if (parts?.length > 1) {
    formattedNumber += "." + parts[1];
  }

  return formattedNumber;
};

const roundNumberToFixed = (number: number, decimalPlaces: number) => {
  const numberString = number.toString();

  if (numberString.includes(".")) {
    const decimalPart = numberString.split(".")[1];

    if (decimalPart.length > decimalPlaces) {
      return number.toFixed(decimalPlaces);
    }
  }

  return numberString;
};

export { generateObjectId, numberWithCommas, roundNumberToFixed };
