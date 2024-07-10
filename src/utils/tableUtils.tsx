export const calculateVariance = (
  date2022: number,
  date2024: number
): string => {
  const variance: any = (date2024 - date2022).toFixed(2);
  return variance === "0.00" || isNaN(parseFloat(variance)) ? "" : variance;
};

export const calculateVariancePercentage = (
  date2022: number,
  date2024: number
): string => {
  if (date2022 === 0) return "";
  const variance = calculateVariance(date2022, date2024);
  const variancePercentage = (parseFloat(variance) / date2022).toFixed(2);
  return variancePercentage === "0.00" || isNaN(parseFloat(variancePercentage))
    ? ""
    : `${parseFloat(variancePercentage).toFixed(2)}%`;
};
