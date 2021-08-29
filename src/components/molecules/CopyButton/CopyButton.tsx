import React from "react";
import type { Props as ContainerProps } from ".";
import { Button } from "../../atoms/Button";

export interface Props extends ContainerProps {
  readonly onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Presentation: React.FC<Props> = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);
