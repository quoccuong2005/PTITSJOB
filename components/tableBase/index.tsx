import { ReactNode } from "react";
// @ts-ignore
import styled from "styled-components";
import _ from "lodash";

export interface IColumns {
  title?: string;
  dataIndex?: string|string[];
  width?: number | string;
  render?: (val: any, record: any) => ReactNode;
  align?: "center" | "left" | "right";
}
interface IProps {
  columns?: IColumns[];
  dataSource?: Record<string, any>[];
  align?: "center" | "left" | "right";
}
const  TableBase = (props: IProps) => {
  return (
    <TableWrapper>
      <table id="table" className="table-auto">
        <thead>
          <tr>
            {props.columns?.map((val, i) => {
              return (
                <th
                  className={`${val.align ?? "left"} `}
                  key={i}
                  style={{ width: val.width ? val.width : 100 }}
                >
                  {val.title}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.dataSource && props.dataSource.length > 0 ? (
            <>
              {props.dataSource?.map((valData, i) => {
                return (
                  <tr key={i}>
                    {props.columns?.map((valColumn, j) => {
                      return (
                        <td
                          className={`${valColumn.align ?? "left"}`}
                          key={j}
                          style={{
                            width: valColumn.width ? valColumn.width : 100,
                          }}
                        >
                          {valColumn.render
                            ? valColumn.render(
                                _.get(valData,valColumn?.dataIndex??''),
                                valData
                              )
                            : _.get(valData,valColumn?.dataIndex??'')}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </>
          ) : (
            <tr>
              <td colSpan={props.columns && props.columns.length}>
                <div className="flex justify-center w-full">
                  <div className="flex flex-col items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-secondary"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                      />
                    </svg>
                   <p className="text-secondary text-sm">Không có dữ liệu</p>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </TableWrapper>
  );
};
export default TableBase;
const TableWrapper = styled.div`
  border-radius: 8px;
  overflow-x: scroll;
  width: 100%;
  /* width */
  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  #table {
    width: 100%;
  }
  #table > thead > tr > th {
    min-width: 100px;
    padding: 16px 16px;
    overflow-wrap: break-word;
    position: relative;
    /*color: rgba(0, 0, 0, 0.85);*/
    font-weight: 500;
    /*text-align: left;*/
    background: #F8F9FA;
    border-bottom: 1px solid #CED4DA;
    border-top: 1px solid #CED4DA;
    transition: background 0.3s ease;
    border-right: 1px solid #CED4DA;
   &:first-of-type{
     border-left: 1px solid #CED4DA;
   }
  }
  #table > thead > tr:first-child th:first-child {
    border-top-left-radius: 2px;
  }
  #table > tbody > tr > td {
    background: #F8F9FA;
    position: relative;
    padding: 16px 16px;
    overflow-wrap: break-word;
    border-bottom: 1px solid #CED4DA;
    transition: background 0.3s;
    border-right: 1px solid #CED4DA;
    &:first-of-type {
      border-left: 1px solid #CED4DA;
    }
  }
  #table .left {
    text-align: left;
  }
  #table .right {
    text-align: right;
  }
  #table .center {
    text-align: center;
  }
`;
