import Container from "@/components/Sections/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link2 } from "react-feather";

export default function Projects() {
  return (
    <Container header>
      <div>
        <h1 className={`text-2xl font-bold`}>FEATURED WORK</h1>
        <div className="grid grid-cols-1 space-y-3 mt-5">
          <div className="border border-[#252529] bg-[#141417] rounded-xl sm:flex items-center gap-1">
            <div className=" p-2">
              <Image
                src={"/a.png"}
                alt="mockup"
                width={500}
                height={100}
                className="border border-[#202024] rounded-xl"
              />
            </div>
            <div className="p-3 w-full">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-extrabold">Personal Website</h1>
                <Link
                  target="_blank"
                  href={"a"}
                  className="border border-[#252529] bg-[#18181b] hover:bg-[#1f1f24] duration-200 px-5 py-2 flex items-center rounded-lg text-zinc-400 gap-2"
                >
                  <Link2 size={15} />
                  Preview
                </Link>
              </div>
              <hr className="border-t border-t-[#252529] decoration-dotted my-3" />
              <div className="flex items-center gap-5">
                <ul className="flex gap-2">
                  <li className="text-sm w-fit bg-[#18181b] border border-[#252529] px-2 py-1 rounded text-zinc-400">
                    # Next.js
                  </li>
                  <li className="text-sm w-fit bg-[#18181b] border border-[#252529] px-2 py-1 rounded text-zinc-400">
                    # Next.js
                  </li>
                </ul>
                <span className="bg-zinc-400 w-[3.5px] h-[3.5px] rounded-full"></span>
                <p className="text-sm text-zinc-400">typescript</p>
              </div>
              <hr className="border-t border-t-[#252529] decoration-dotted my-3" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                obcaecati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
