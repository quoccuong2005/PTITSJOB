import { Table } from "flowbite-react";
import { ReactNode } from "react";
export interface IColumns {
  title?: string;
  dataIndex?: string;
  width?: number | string;
  render?: (val: any, record: any) => ReactNode;
  align?: "center" | "left" | "right";
}
interface IProps {
  columns?: IColumns[];
  dataSource?: Record<string, any>[];
  align?: "center" | "left" | "right";
}
const TableBaseV2 = (props: IProps) => {
  return (
    <>
      <Table className="table-fixed">
        <Table.Head >
          {props.columns?.map((val, i) => {
            return <Table.HeadCell >{val.title}</Table.HeadCell>;
          })}
        </Table.Head>
        <Table.Body className="divide-y">
          {props.dataSource && props.dataSource.length > 0 ? (
            <>
              {props.dataSource?.map((valData, i) => {
                return (
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    {props.columns?.map((valColumn, j) => {
                      return (
                        <Table.Cell>
                          {valColumn.render
                            ? valColumn.render(
                                valData?.[valColumn.dataIndex ?? ""],
                                valData
                              )
                            : valData?.[valColumn.dataIndex ?? ""]}
                        </Table.Cell>
                      );
                    })}
                  </Table.Row>
                );
              })}
            </>
          ) : (
            <Table.Row>
              <Table.Cell colSpan={props.columns && props.columns.length}>
                <div className="flex justify-center w-full">
                  <div>
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
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </>
  );
};
export default TableBaseV2;
