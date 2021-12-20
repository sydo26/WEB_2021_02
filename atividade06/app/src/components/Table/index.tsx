import React from "react";

import styled from "./table.module.css";

export type TableColunmType = {
  identification: string;
  header: string;
};

export type TableDataType = {
  value: { [identification: string]: any };
};

export type TableProps = {
  data?: TableDataType[];
  colunms?: TableColunmType[];
};

const Table: React.FC<TableProps> = ({ data = [], colunms = [] }) => {
  return (
    <div>
      <table className={styled.table}>
        <thead>
          <tr>
            {colunms.map((colunm) => (
              <th key={colunm.identification}>{colunm.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((obj, idx) => {
            return (
              <tr key={idx}>
                {colunms.map((colunm) => {
                  return (
                    <td key={`obj_${colunm.identification}`}>
                      {obj.value[colunm.identification]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
