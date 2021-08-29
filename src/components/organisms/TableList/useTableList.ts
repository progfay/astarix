import type { Props as ContainerProps } from "./index";
import type { Props as PresentationProps } from "./TableList";

export const useTableList = ({
  ...props
}: ContainerProps): PresentationProps => {
  return { ...props };
};
