import React from "react";
import { Table } from "../../../types";
import { Presentation } from "./TableList";
import { useTableList } from "./useTableList";

export interface Props {
  readonly tables: Table[];
}

export const TableList: React.VFC<Props> = (props) => {
  const values = useTableList(props);
  return <Presentation {...values} />;
};
