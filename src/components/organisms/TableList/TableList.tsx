import React from "react";
import type { Props as ContainerProps } from ".";
import { TableListItem } from "../../molecules/TableListItem";

export type Props = ContainerProps;

export const Presentation: React.VFC<Props> = ({ tables }) => (
  <ul>
    {tables.map((table) => (
      <TableListItem table={table} key={table.tableName} />
    ))}
  </ul>
);
