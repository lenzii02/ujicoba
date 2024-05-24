"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NavMenu } from "@/lib/nav-menu";
import { NavIcon } from "@/components/ui/nav-icon";
import { Search } from "@/components/ui/search";
import Link from "next/link";

export type HeaderProps = {
  ProfileCTA?: React.ReactNode;
};

const Header = ({ ProfileCTA }: HeaderProps) => {
  const [isScrolling, setScrolling] = useState<boolean>(false);

  const onScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <header
      className={cn(
        "sticky top-0 py-2 w-full z-20 transition-all duration-700",
        isScrolling
          ? "bg-white border-b border-slate-200 shadow-md shadow-slate-500/10"
          : "bg-slate-50",
      )}
    >
      <div className="flex justify-between items-center w-2/3 mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={45}
              priority
              draggable={false}
            />
          </Link>
        </div>
        <Search />
        <div className="flex items-center">
          <nav className="flex pt-1 items-end ml-10 space-x-8 mr-8">
            {NavMenu.map((props, index) => (
              <NavIcon key={index} {...props} />
            ))}
          </nav>
          {ProfileCTA}
        </div>
      </div>
    </header>
  );
};

export default Header;
