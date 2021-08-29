import React, { RefObject } from "react";
import type { Props as ContainerProps } from ".";
import { Button } from "../../atoms/Button";
import { Textarea } from "../../atoms/Textarea";

export interface Props extends Omit<ContainerProps, "onSubmit"> {
  readonly textareaRef: RefObject<HTMLTextAreaElement>;
  readonly onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export const Presentation: React.VFC<Props> = ({ onSubmit, textareaRef }) => (
  <form onSubmit={onSubmit}>
    <Textarea ref={textareaRef} />
    <Button type="submit">submit</Button>
  </form>
);
