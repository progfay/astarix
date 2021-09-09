import { useEffect, useRef, useState } from "react";
import type { Props as ContainerProps } from "./index";
import type { Props as PresentationProps } from "./TableListItem";

const generateDisplayedTablename = (asName: string, column: string) =>
  `${asName !== "" ? `\`${asName}\`.` : ""}\`${column}\``;

export const useTableListItem = ({
  table,
  ...props
}: ContainerProps): PresentationProps => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [asName, setAsName] = useState("");

  useEffect(() => {
    const inputElement = inputRef.current;
    if (!inputElement) return;

    const handler = () => {
      setAsName(inputElement.value);
    };
    inputElement.addEventListener("input", handler);
    return () => {
      inputElement.removeEventListener("input", handler);
    };
  }, [inputRef, setAsName]);
  const text = table.columns
    .map((column) => generateDisplayedTablename(asName, column))
    .join(", ");

  return { ...props, table, inputRef, text };
};
