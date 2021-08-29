import React from "react";
import { Table } from "../../../types";
import {
  Props as SchemaFormProps,
  SchemaForm,
} from "../../molecules/SchemaForm";
import { TableList } from "../../organisms/TableList";

export interface Props {
  readonly tables: Table[];
  readonly onSubmitSchemaForm: SchemaFormProps["onSubmit"];
}

export const Presentation: React.VFC<Props> = ({
  tables,
  onSubmitSchemaForm,
}) => (
  <>
    <SchemaForm onSubmit={onSubmitSchemaForm} />
    <TableList tables={tables} />
  </>
);
