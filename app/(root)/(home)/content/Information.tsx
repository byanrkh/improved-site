import { Mono } from "@/libs/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "@/components/Sections/Container";
import GitHubCalendar from "react-github-calendar";

export default function Information() {
  return (
    <>
      <Container header>
        <div className="flex justify-between flex-col-reverse sm:flex-row gap-10">
          <div className="sm:w-2/3">
            <h1 className="text-2xl font-bold">Abyan Raditya 🎸</h1>
            <p className={`${Mono.className} text-sm text-neutral-300`}>
              Guitarist @{" "}
              <Link
                href="https://instagram.com/walsongs"
                className="text-theme underline underline-offset-1 hover:underline-offset-[2px] duration-100"
                target="_blank"
              >
                Walsong.
              </Link>
            </p>
            <p className="mt-5 text-justify">
              I&apos;m a frontend developer focused on building responsive,
              user-friendly web apps. Outside of coding, I play in a band, with
              guitar as my main instrument.
            </p>
          </div>
          <div>
            <Image
              src={"/abyan.jpeg"}
              alt="Abyan"
              width={140}
              height={140}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="bg-[#18181b] border border-[#252529] p-5 rounded mt-10">
          <GitHubCalendar username="byanrkh" blockSize={9.174527726415} />
        </div>
      </Container>
    </>
  );
}
