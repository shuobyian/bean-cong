const commaWithNumber = (number: number) =>
  number?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? 0;

const commaWithMoney = (number: number) => `${commaWithNumber(number)}원`;

export const StringUtil = {
  commaWithNumber,
  commaWithMoney,
};
