"use server";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ProfileCTA = async () => {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div className="flex items-center py-2 px-4 cursor-pointer transition-all duration-700 rounded-xl hover:bg-white">
      <Avatar>
        <AvatarImage src="#" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div className="ml-2 flex flex-col">
        <span className="text-xs">Nama Pengguna</span>
        <span className="text-xs text-muted-foreground">pengguna@mail.com</span>
      </div>
    </div>
  ) : (
    <div className="flex items-center space-x-4">
      <Button variant="outline" asChild>
        <Link href="/register">Daftar</Link>
      </Button>
      <Button asChild>
        <Link href="/login">Masuk</Link>
      </Button>
    </div>
  );
};
