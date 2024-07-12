import { NumericFormat } from "react-number-format";

export const calculateVariance = (
  date2022: number,
  date2024: number
): number => {
  if (!date2024) return 0;
  const variance: any = (date2024 - date2022).toFixed(2);
  return variance === 0.0 || isNaN(variance) ? 0 : variance;
};

export const calculateVariancePercentage = (
  date2022: number,
  date2024: number
): string => {
  if (date2022 === 0 || date2024 === undefined || date2024 === null) return "";
  const variance = calculateVariance(date2022, date2024);
  const variancePercentage = (variance / date2022) * 100;
  if (variancePercentage === 0 || isNaN(variancePercentage)) return "";
  const formattedPercentage = variancePercentage.toFixed(2);
  return `${variancePercentage > 0 ? "+" : ""}${formattedPercentage}%`;
};

export const DisplayVariance = ({ data, ...props }: any) => {
  return (
    <td className={data > 0 ? "positive" : "negative"} {...props}>
      <NumbeFormatInput
        type={"date2024"}
        value={data === 0 ? "" : data}
        disabled={true}
        handleChange={(e: any) => {}}
      />
    </td>
  );
};

export const DisplayVariancePercentage: React.FC<any> = ({
  data,
  ...props
}) => {
  const value = parseFloat(data.replace("%", ""));
  return (
    <td className={value >= 0 ? "positive" : "negative"} {...props}>
      {value === 0 ? "" : data}
    </td>
  );
};

type Props = {
  type?: string;
  handleChange: (e: { target: { name: string; value: number } }) => void;
  disabled?: boolean;
  value?: number;
};

export const NumbeFormatInput: React.FC<Props> = ({
  type = "",
  handleChange,
  disabled = false,
  value,
}) => {
  return (
    <NumericFormat
      value={value}
      thousandsGroupStyle="lakh"
      thousandSeparator=","
      renderText={(formattedValue) => <b>{formattedValue}</b>}
      onValueChange={(values) => {
        handleChange({
          target: {
            name: type,
            value: values.floatValue ?? 0,
          },
        });
      }}
      disabled={disabled}
    />
  );
};

export const calculateTotal = (data: any, key: string) => {
  if (!data) return 0;
  let total = data.reduce(
    (sum: any, item: any) =>
      parseFloat(sum) + parseFloat(item[key] ? item[key] : 0),
    0
  );
  return total ? total.toFixed(2) : "";
};
