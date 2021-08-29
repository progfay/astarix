import type { Props as ContainerProps } from "./index";
import type { Props as PresentationProps } from "./TableListItem";

export const useTableListItem = ({
  table,
  ...props
}: ContainerProps): PresentationProps => {
  const text = table.columns.map((column) => `\`${column}\``).join(", ");
  return { ...props, table, text };
};
