import { useCallback, useRef } from "react";
import type { Props as ContainerProps } from "./index";
import type { Props as PresentationProps } from "./SchemaForm";

export const useSchemaForm = ({
  onSubmit,
  ...props
}: ContainerProps): PresentationProps => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleSubmit = useCallback<PresentationProps["onSubmit"]>(
    (event) => {
      event.preventDefault();
      if (!textareaRef.current) return;
      onSubmit(textareaRef.current.value);
    },
    [onSubmit]
  );

  return { ...props, textareaRef, onSubmit: handleSubmit };
};
