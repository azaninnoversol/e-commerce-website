"use client";
import React, { useEffect, useState } from "react";

// mock-data
import { Href, NavItems, navItems } from "@/utils/mockData";

// next
import { usePathname } from "next/navigation";
import Link from "next/link";

// components
import Input from "../Input/Input";

// icons
import { Heart, Search, ShoppingCart } from "lucide-react";

function Header() {
  const [isActivePage, setIsActivePage] = useState<Href>("/");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) setIsActivePage(pathname as Href);
  }, [pathname]);

  return (
    <header className="pt-10 pb-4 border-b border-b-gray-300">
      <main className="container mx-auto">
        <div className="flex items-end justify-between">
          <Link href={"/"}>
            <h1 className="text-3xl font-semibold">Exclusive</h1>
          </Link>

          <nav>
            <ul className="flex items-center gap-8">
              {navItems?.map((single: NavItems, idx: number) => (
                <li
                  key={idx || single?.href}
                  className={`relative font-normal cursor-pointer py-1 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-gray-600 before:transition-all before:duration-300 hover:before:w-full
                    ${
                      isActivePage === single?.href
                        ? "before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-gray-600 before:transition-all before:duration-300 before:w-full"
                        : ""
                    }`}
                >
                  <Link href={single?.href}>{single?.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4 w-82">
            <div className="relative flex-1">
              <Search size={24} className="absolute top-2.5 right-3 z-10" />
              <Input placeholder="What are you looking for?" className="" />
            </div>

            <Heart size={24} className="cursor-pointer" />
            <ShoppingCart size={24} className="cursor-pointer" />
          </div>
        </div>
      </main>
    </header>
  );
}

export default React.memo(Header);
