import Footer from "@/components/Navigation/Footer";
import Navbar from "@/components/Navigation/Navbar";
import React, { ReactNode } from "react";

export default function layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl sm:mx-auto px-4 py-20 w-screen flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
