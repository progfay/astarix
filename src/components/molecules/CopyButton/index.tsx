import React from "react";
import { Presentation } from "./CopyButton";
import { useCopyButton } from "./useCopyButton";

export interface Props {
  readonly text: string;
}

export const CopyButton: React.FC<Props> = (props) => {
  const values = useCopyButton(props);
  return <Presentation {...values} />;
};
