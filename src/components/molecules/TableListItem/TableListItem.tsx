import React from "react";
import type { Props as ContainerProps } from ".";
import { CopyButton } from "../CopyButton";

export interface Props extends ContainerProps {
  readonly inputRef: React.RefObject<HTMLInputElement>;
  readonly text: string;
}

export const Presentation: React.VFC<Props> = ({ table, inputRef, text }) => (
  <li>
    <h2>
      <code>
        SELECT * FROM <span style={{ color: "red" }}>{table.tableName}</span> AS{" "}
        <input ref={inputRef} />
      </code>
    </h2>
    <pre>
      <code>{text}</code>
    </pre>
    <CopyButton text={text}>Copy</CopyButton>
  </li>
);
