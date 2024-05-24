"use client";

import { usePathname, useRouter } from "next/navigation";
import { icons } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { Icon } from "./icon";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export type SidebarItemProps = {
  title: string;
  icon?: keyof typeof icons;
  href: string;
  type?: "menu" | "space";
  imageUrl?: string;
};

export const SidebarItem = ({
  title,
  icon,
  href,
  imageUrl,
  type = "menu",
}: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href="/"
      className={cn(
        "w-full flex space-x-4 items-center border-[0.5px] border-slate-100/50 p-2 rounded-md font-bold transition-all duration-200 ",
        isActive
          ? "border-slate-300 bg-white"
          : "bg-transparent hover:border-slate-300 hover:bg-white",
      )}
    >
      <Button
        className={cn(
          "p-2 hover:bg-transparent",
          isActive ? "bg-primary text-white hover:text-white" : null,
        )}
        variant="ghost"
      >
        {type === "menu" ? (
          <Icon name={icon ?? "FileQuestion"} size={24} />
        ) : (
          <Avatar className="-ml-2 -mr-2">
            <AvatarImage src={imageUrl} />
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>
        )}
      </Button>
      <span>{title}</span>
    </Link>
  );
};
