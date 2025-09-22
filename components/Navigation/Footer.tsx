import Link from "next/link";
import path from "path";
import React from "react";

export default function Footer() {
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

  const Social = [
    {
      label: "Instagram",
      path: "https://instagram.com/byanrkh",
    },
    {
      label: "Discord",
      path: "https://discord.com/users/1177786343301075007",
    },
    {
      label: "Tiktok",
      path: "https://tiktok.com/@byanrkh",
    },
    {
      label: "E-Mail",
      path: "mailto:abyan.raditya@icloud.com",
    },
  ];

  return (
    <footer className="border-t border-t-[#202024]">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:flex sm:justify-between gap-5">
          <div>
            <p className="text-xs sm:text-sm text-neutral-300">
              &copy; {new Date().getFullYear()} Abyan Raditya <br />
              All rights reserved.
            </p>
          </div>
          <div>
            <h1 className="mb-3 sm:mb-5 font-medium">Quick Links</h1>
            <ul className="space-y-4">
              {Links.map((link, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm capitalize text-neutral-300 hover:text-[#E5859F] duration-150"
                  >
                    <Link href={link.path}>{link.label}</Link>
                  </li>
                );
              })}
              <li className="text-xs sm:text-sm capitalize text-neutral-300 hover:text-[#E5859F] duration-150">
                <Link href={"/rss"}>RSS</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="mb-3 sm:mb-5 font-medium">Social</h1>
            <ul className="space-y-4">
              {Social.map((social, idx) => {
                return (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-neutral-300 hover:text-[#E5859F] duration-150"
                  >
                    <Link href={social.path} target="_blank">
                      {social.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
