import React from "react";
import { Table } from "../../../types";
import { Presentation } from "./TableListItem";
import { useTableListItem } from "./useTableListItem";

export interface Props {
  readonly table: Table;
}

export const TableListItem: React.VFC<Props> = (props) => {
  const values = useTableListItem(props);
  return <Presentation {...values} />;
};
