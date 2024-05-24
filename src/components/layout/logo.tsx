"use server";

import { cn } from "@/lib/utils";
import Image from "next/image";

export const Logo = async () => {
  return (
    <div className={cn("w-40 h-20")}>
      <Image
        src="/logo.png"
        alt="Logo"
        style={{ objectFit: "contain", width: "100%" }}
        fill
        priority
        draggable={false}
      />
    </div>
  );
};
