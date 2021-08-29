import React from "react";
import { Presentation } from "./SchemaForm";
import { useSchemaForm } from "./useSchemaForm";

export interface Props {
  readonly onSubmit: (schema: string) => void;
}

export const SchemaForm: React.VFC<Props> = (props) => {
  const values = useSchemaForm(props);
  return <Presentation {...values} />;
};
