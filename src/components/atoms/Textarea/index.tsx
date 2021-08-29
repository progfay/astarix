import React from "react";

const Base = (
  props: JSX.IntrinsicElements["textarea"],
  ref: React.ForwardedRef<HTMLTextAreaElement>
) => <textarea {...props} ref={ref} />;

export const Textarea = React.forwardRef(Base);
