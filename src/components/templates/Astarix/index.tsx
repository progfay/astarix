import React from "react";
import { Presentation } from "./Astarix";
import { useAstarix } from "./useAstarix";

export const Astarix: React.VFC = () => {
  const values = useAstarix();
  return <Presentation {...values} />;
};
