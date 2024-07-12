import React, { useState } from "react";
import { masterData } from "./financeData";
import _ from "lodash";
import "./Table.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  calculateTotal,
  calculateVariance,
  calculateVariancePercentage,
  DisplayVariance,
  DisplayVariancePercentage,
  NumbeFormatInput,
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

  const handleInputChange = (e: any, index: number, type: string) => {
    let categ = financeData.find((x) => x.category === type);
    categ.data[index][e.target.name] = e.target.value;
    setFinanceData([...financeData]);
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
          {financeData &&
            financeData.length &&
            financeData.map((dataItem: any, index: number) => (
              <React.Fragment key={index}>
                {dataItem?.category !== "info" && (
                  <tr>
                    <td className="category" data-label="Category">
                      {dataItem?.category}
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                )}
                {dataItem?.data?.map((item: any, itemIndex: number) => (
                  <tr key={itemIndex}>
                    {item.isEditable ? (
                      <>
                        <td data-label="Field Name">
                          <input
                            className="editable-input"
                            type="text"
                            name="fieldName"
                            onChange={(e) =>
                              handleInputChange(
                                e,
                                itemIndex,
                                dataItem?.category
                              )
                            }
                          />
                        </td>
                        <td data-label="31-12-2020">
                          <NumbeFormatInput
                            type={"date2021"}
                            handleChange={(e: any) =>
                              handleInputChange(
                                e,
                                itemIndex,
                                dataItem?.category
                              )
                            }
                          />
                        </td>
                        <td data-label="31-12-2022">
                          <NumbeFormatInput
                            type={"date2022"}
                            handleChange={(e: any) =>
                              handleInputChange(
                                e,
                                itemIndex,
                                dataItem?.category
                              )
                            }
                          />
                        </td>
                        <td data-label="31-12-2024">
                          <NumbeFormatInput
                            type={"date2024"}
                            handleChange={(e: any) =>
                              handleInputChange(
                                e,
                                itemIndex,
                                dataItem?.category
                              )
                            }
                          />
                        </td>
                        <DisplayVariance
                          data-label="Variance"
                          data={calculateVariance(
                            item?.date2022,
                            item?.date2024
                          )}
                        />
                        <DisplayVariancePercentage
                          data-label="Variance %"
                          data={calculateVariancePercentage(
                            item?.date2022,
                            item?.date2024
                          )}
                        />
                      </>
                    ) : (
                      <>
                        <td data-label="Field Name">
                          <div className="add-button-container">
                            {item.fieldName}
                            {item.fieldName == "Others" && (
                              <button
                                className="add-button"
                                onClick={() => handleAddRow(dataItem.category)}
                              >
                                <FontAwesomeIcon icon={faPlus} color="#fff" />
                              </button>
                            )}
                          </div>
                        </td>
                        <td data-label="31-12-2020">
                          {dataItem.category !== "info" ? (
                            <NumbeFormatInput
                              type={"date2021"}
                              value={item.date2021}
                              disabled={true}
                              handleChange={(e: any) => {}}
                            />
                          ) : (
                            item.date2021
                          )}
                        </td>
                        <td data-label="31-12-2022">
                          {dataItem.category !== "info" ? (
                            <NumbeFormatInput
                              type={"date2022"}
                              value={item.date2022}
                              disabled={true}
                              handleChange={(e: any) => {}}
                            />
                          ) : (
                            item.date2022
                          )}
                        </td>
                        <td data-label="31-12-2024">
                          {dataItem.category !== "info" ? (
                            <NumbeFormatInput
                              type={"date2024"}
                              handleChange={(e: any) =>
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
                        {dataItem.category !== "info" && (
                          <DisplayVariance
                            data-label="Variance"
                            data={calculateVariance(
                              item.date2022,
                              item?.date2024
                            )}
                          />
                        )}
                        <DisplayVariancePercentage
                          data-label="Variance %"
                          data={calculateVariancePercentage(
                            item.date2022,
                            item?.date2024
                          )}
                        />
                      </>
                    )}
                  </tr>
                ))}
                {dataItem.category !== "info" && (
                  <tr className="totalRow">
                    <td>{""}</td>
                    <td>
                      <NumbeFormatInput
                        type={"date2024"}
                        value={calculateTotal(dataItem.data, "date2021")}
                        disabled={true}
                        handleChange={(e: any) => {}}
                      />
                    </td>
                    <td>
                      <NumbeFormatInput
                        type={"date2024"}
                        value={calculateTotal(dataItem.data, "date2022")}
                        disabled={true}
                        handleChange={(e: any) => {}}
                      />
                    </td>
                    <td>
                      <NumbeFormatInput
                        type={"date2024"}
                        value={calculateTotal(dataItem.data, "date2024")}
                        disabled={true}
                        handleChange={(e: any) => {}}
                      />
                    </td>

                    <DisplayVariance
                      data={calculateVariance(
                        calculateTotal(dataItem.data, "date2022"),
                        calculateTotal(dataItem.data, "date2024")
                      )}
                    />

                    <DisplayVariancePercentage
                      data={calculateVariancePercentage(
                        calculateTotal(dataItem.data, "date2022"),
                        calculateTotal(dataItem.data, "date2024")
                      )}
                    />
                  </tr>
                )}
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
