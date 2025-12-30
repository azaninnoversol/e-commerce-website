import React from "react";

// mock-data
import { FooterItemsProps, points } from "@/utils/mockData";
// next
import Link from "next/link";
// components
import Input from "../Input/Input";
// icons
import { Facebook, Instagram, Linkedin, SendHorizontal, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black py-14">
      <main className="flex items-start justify-between gap-x-10  container mx-auto">
        <div className="flex flex-col gap-5 font-medium">
          <h1 className="text-4xl text-white">Exclusive</h1>
          <h5 className="text-2xl font-normal text-[#FAFAFA]">Subscribe</h5>
          <p className="font-normal text-[#FAFAFA]">Get 10% off your first order.</p>
          <div className="relative bg-transparent">
            <SendHorizontal className="absolute z-10 top-2 right-4 stroke-white" />
            <Input inputClassName="placeholder:text-white text-white" className="bg-black" placeholder="Enter Your Email" />
          </div>
        </div>

        <div className="flex flex-col justify-between md:flex-row w-[50%]">
          {points.map((item, idx) => (
            <FooterColumn key={idx} title={item.title} points={item.points} />
          ))}
        </div>

        <div className="flex flex-col gap-5 font-medium">
          <h1 className="text-4xl text-white">Social Media Links</h1>
          <div className="stroke-white text-white flex items-center gap-6">
            <Link href={"#"}>
              <Facebook />
            </Link>
            <Link href={"#"}>
              <Twitter />
            </Link>
            <Link href={"#"}>
              <Instagram />
            </Link>
            <Link href={"#"}>
              <Linkedin />
            </Link>
          </div>
        </div>
      </main>
    </footer>
  );
}

export default React.memo(Footer);

const FooterColumn = ({ title, points }: FooterItemsProps) => {
  return (
    <div className="flex flex-col gap-6 font-medium">
      <h5 className="text-2xl font-medium text-white">{title}</h5>
      <ul className="flex flex-col gap-5">
        {points.map((point, idx) => (
          <li key={idx} className="text-[#FAFAFA] font-normal hover:underline cursor-pointer">
            <Link href={point.link}>{point.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
