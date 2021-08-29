import React from "react";

const Base = (
  props: JSX.IntrinsicElements["button"],
  ref: React.ForwardedRef<HTMLButtonElement>
) => <button {...props} ref={ref} />;

export const Button = React.forwardRef(Base);
