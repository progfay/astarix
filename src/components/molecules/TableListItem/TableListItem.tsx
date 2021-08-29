import React from "react";
import type { Props as ContainerProps } from ".";
import { CopyButton } from "../CopyButton";

export interface Props extends ContainerProps {
  readonly text: string;
}

export const Presentation: React.VFC<Props> = ({ table, text }) => (
  <li>
    <h2>
      <code>{table.tableName}</code>
    </h2>
    <pre>
      <code>{text}</code>
    </pre>
    <CopyButton text={text}>Copy</CopyButton>
  </li>
);
