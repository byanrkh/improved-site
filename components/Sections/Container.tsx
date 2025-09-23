import { cn } from "@/libs/cn";
import React from "react";

export default function Container({
  children,
  className,
  header,
}: {
  children: React.ReactNode;
  className?: string;
  header: boolean;
}) {
  return (
    <>
      <div className={cn(className, "my-20")}>{children}</div>
      {header == true ? (
        <hr className="mb-20 border-t border-t-[#202024]" />
      ) : (
        ""
      )}
    </>
  );
}
