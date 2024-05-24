import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forum for Pancasila",
  description:
    "Forum for Pancasila is a community of people who believe in the Pancasila ideology. We discuss and promote the values of Pancasila in our daily lives, and work together to build a better society.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TooltipProvider>
        <body className={cn("bg-slate-100/50", sans.className)}>
          {children}
        </body>
      </TooltipProvider>
    </html>
  );
}
