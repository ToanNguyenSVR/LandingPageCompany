export const formatCurrency = (value: string) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const parseCurrency = (value: string): number => {
  return parseFloat(value.replace(/,/g, ""));
};
