import React, { ReactNode } from "react";

export default function Highlight({ children }: { children: ReactNode }) {
  return <span className="bg-theme text-black px-1">{children}</span>;
}
