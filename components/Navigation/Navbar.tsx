"use client";

import { cn } from "@/libs/cn";
import { usePathname } from "next/navigation";
import { Drawer } from "vaul";

import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const Links = [
    {
      label: "home",
      path: "/",
    },
    {
      label: "writings",
      path: "/writings",
    },
    {
      label: "guestbook",
      path: "/guestbook",
    },
  ];

  return (
    <nav className="border-b border-b-[#202024] py-6">
      <div className="max-w-3xl mx-auto sm:px-4 px-8">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={"/brand/byanrkh-.png"}
              alt="brand"
              width={40}
              height={40}
            />
          </Link>
          <ul className="hidden sm:flex gap-4">
            {Links.map((nav, idx) => {
              return (
                <li
                  className={cn(
                    "text-sm capitalize text-neutral-300 hover:text-white duration-150",
                    pathname == nav.path
                      ? "underline underline-offset-2 text-theme hover:text-theme"
                      : ""
                  )}
                  key={idx}
                >
                  <Link href={nav.path}>{nav.label}</Link>
                </li>
              );
            })}
          </ul>
          <div className="block sm:hidden">
            <Drawer.Root>
              <Drawer.Trigger>
                <div className="bg-[#1a1a1a] px-5 py-2 rounded-full text-sm">
                  Menu
                </div>
              </Drawer.Trigger>
              <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 sm:hidden" />
                <Drawer.Content className="h-fit fixed bottom-0 left-0 right-0 outline-none p-2 sm:hidden">
                  <div className="p-4 bg-background rounded-xl border border-[#202024]">
                    <div
                      aria-hidden
                      className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-[#202024] mb-8"
                    />
                    <Drawer.Title className="hidden"></Drawer.Title>
                    <div className="grid grid-cols-1 space-y-2">
                      {Links.map((nav, idx) => {
                        return (
                          <Link
                            className={cn(
                              "py-3 border border-[#1c1c1f] rounded flex justify-center capitalize",
                              pathname == nav.path ? "bg-[#1b1b1e]" : ""
                            )}
                            key={idx}
                            href={nav.path}
                          >
                            {nav.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </div>
        </div>
      </div>
    </nav>
  );
}
