import _ from "lodash";
export const masterData = [
  {
    id: "1",
    category: "info",
    data: [
      {
        id: _.uniqueId(),
        fieldName: "Accounting standards",
        date2021: "IFRS",
        date2022: "IFRS",
        date2024: "IFRS",
        variance: "",
        variancePercent: "",
        category: "info",
      },
      {
        id: _.uniqueId(),
        fieldName: "Audit Method",
        date2021: "IFRS16 Adj",
        date2022: "IFRS16 Adj",
        date2024: "IFRS16 Adj",
        variance: "",
        variancePercent: "",
        category: "info",
      },
      {
        id: _.uniqueId(),
        fieldName: "FX rate",
        date2021: 0.1286,
        date2022: 0.1286,
        date2024: 0.1286,
        variance: "",
        variancePercent: "",
        category: "info",
      },
    ],
  },
  {
    id: "2",
    category: "Revenue",
    data: [
      {
        id: _.uniqueId(),

        fieldName: "Accounting standards",
        date2021: 5146,
        date2022: 6149,
        date2024: "",
        variance: "",
        variancePercent: "",
        category: "info",
      },
      {
        id: _.uniqueId(),
        fieldName: "Audit Method",
        date2021: 45.34,
        date2022: 56.7,
        date2024: "",
        variance: "",
        variancePercent: "",
        category: "info",
      },
      {
        id: _.uniqueId(),
        fieldName: "Others",
      },
    ],
  },
  {
    id: "3",
    category: "operating Expenses",
    data: [
      {
        id: _.uniqueId(),

        fieldName: "Accounting standards",
        date2021: 22.5,
        date2022: 120,
        date2024: "",
        variance: "",
        variancePercent: "",
        category: "info",
      },
      {
        id: _.uniqueId(),
        fieldName: "Audit Method",
        date2021: 26.9,
        date2022: 39.8,
        date2024: "",
        variance: "",
        variancePercent: "",
        category: "info",
      },
      {
        id: _.uniqueId(),
        fieldName: "Others",
      },
    ],
  },
];
