import React, { useEffect, useState } from "react";
import { masterData } from "./financeData";
import _ from "lodash";
import "./Table.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  calculateVariance,
  calculateVariancePercentage,
} from "../utils/tableUtils";

const Table = () => {
  const [financeData, setFinanceData] = useState<any[]>(masterData);

  const handleAddRow = (type: string) => {
    let categ = financeData.find((x) => x.category === type);
    categ.data.push({
      id: _.uniqueId(),
      fieldName: "",
      date2021: 0,
      date2022: 0,
      date2024: 0,
      variance: 0,
      variancePercent: "",
      type: type,
      isEditable: true,
    });
    setFinanceData([...financeData]);
  };

  useEffect(() => {
    console.log("data updated", financeData);
  }, [financeData]);

  const handleInputChange = (e: any, index: number, type: string) => {
    console.log("change", e.target.value, e.target.name, index, type);
    let categ = financeData.find((x) => x.category === type);

    categ.data[index][e.target.name] = e.target.value;
    setFinanceData([...financeData]);
  };
  const calculateTotal = (data: any, key: string) => {
    if (!data) return 0;
    let total = data.reduce(
      (sum: any, item: any) => parseFloat(sum) + parseFloat(item[key]),
      0
    );
    return total ? total.toFixed(2) : "";
  };

  return (
    <div>
      <table>
        <thead>
          <td>(million)</td>
          <td>31-12-2020</td>
          <td>31-12-2022</td>
          <td>31-12-2024</td>
          <td>Variance</td>
          <td>Variance %</td>
        </thead>
        <tbody>
          {financeData.map((dataItem: any) => (
            <>
              {dataItem.category !== "info" && (
                <tr className="category">{dataItem.category}</tr>
              )}
              {dataItem.data.map((item: any, itemIndex: number) => (
                <tr>
                  {item.isEditable ? (
                    <>
                      <td>
                        <input
                          type="text"
                          name="fieldName"
                          onChange={(e) =>
                            handleInputChange(e, itemIndex, dataItem?.category)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="date2021"
                          onChange={(e) =>
                            handleInputChange(e, itemIndex, dataItem?.category)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="date2022"
                          onChange={(e) =>
                            handleInputChange(e, itemIndex, dataItem?.category)
                          }
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          name="date2024"
                          onChange={(e) =>
                            handleInputChange(e, itemIndex, dataItem?.category)
                          }
                        />
                      </td>
                      <td>
                        {calculateVariance(item.date2022, item?.date2024)}
                      </td>
                      <td>
                        {calculateVariancePercentage(
                          item.date2022,
                          item?.date2024
                        )}
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{item.fieldName}</td>
                      <td>{item.date2021}</td>
                      <td>{item.date2022}</td>
                      <td>
                        {dataItem.category !== "info" ? (
                          <input
                            value={item.date2024}
                            type="number"
                            name="date2024"
                            onChange={(e) =>
                              handleInputChange(
                                e,
                                itemIndex,
                                dataItem?.category
                              )
                            }
                          />
                        ) : (
                          item.date2024
                        )}
                      </td>
                      <td
                        className={
                          parseFloat(
                            calculateVariance(item.date2022, item?.date2024)
                          ) > 0
                            ? "positive"
                            : "negative"
                        }
                      >
                        {parseFloat(
                          calculateVariance(item.date2022, item.date2024)
                        )}
                      </td>
                      <td
                        className={
                          parseFloat(
                            calculateVariancePercentage(
                              item.date2022,
                              item?.date2024
                            )
                          ) > 0
                            ? "positive"
                            : "negative"
                        }
                      >
                        {calculateVariancePercentage(
                          item.date2022,
                          item?.date2024
                        )}
                      </td>
                    </>
                  )}
                </tr>
              ))}
              {dataItem.category !== "info" && (
                <tr>
                  <td>
                    Others
                    <button
                      className="add-button"
                      onClick={() => handleAddRow(dataItem.category)}
                    >
                      <FontAwesomeIcon icon={faPlus} color="#fff" />
                    </button>
                  </td>
                </tr>
              )}
              {dataItem.category !== "info" && (
                <tr>
                  <td>{""}</td>
                  <td>{calculateTotal(dataItem.data, "date2021")}</td>
                  <td>{calculateTotal(dataItem.data, "date2022")}</td>
                  <td>{calculateTotal(dataItem.data, "date2024")}</td>
                  <td>{""}</td>
                  <td>{""}</td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
