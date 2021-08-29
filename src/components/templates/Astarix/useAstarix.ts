import { useCallback, useState } from "react";
import { getTablesFromSchema } from "../../../functions/getTablesFromSchema";
import { Table } from "../../../types";
import type { Props as PresentationProps } from "./Astarix";

export const useAstarix = (): PresentationProps => {
  const [tables, setTables] = useState<Table[]>([]);
  const onSubmitSchemaForm = useCallback<
    PresentationProps["onSubmitSchemaForm"]
  >(
    (schema) => {
      setTables(getTablesFromSchema(schema));
    },
    [setTables]
  );

  return { tables, onSubmitSchemaForm };
};
