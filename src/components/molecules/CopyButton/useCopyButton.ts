import copy from "copy-to-clipboard";
import { useCallback } from "react";
import type { Props as PresentationProps } from "./CopyButton";
import type { Props as ContainerProps } from "./index";

export const useCopyButton = ({
  text,
  ...props
}: ContainerProps): PresentationProps => {
  const onClick = useCallback<PresentationProps["onClick"]>(() => {
    copy(text);
  }, [text]);
  return { ...props, text, onClick };
};
