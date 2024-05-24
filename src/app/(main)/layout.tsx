import Header from "@/components/layout/header/header";
import { ProfileCTA } from "@/components/layout/header/profile-cta";
import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@/components/ui/resizable";
import { SidebarItem, SidebarItemProps } from "@/components/ui/sidebar-item";
import React from "react";

const SidebarMenu: SidebarItemProps[] = [
  {
    href: "/",
    title: "Beranda",
    icon: "Home",
  },
  {
    href: "/markah",
    title: "Markah",
    icon: "Bookmark",
  },
];

const SidebarRuang: SidebarItemProps[] = [
  {
    href: "/ruang",
    title: "Ruang 1",
    type: "space",
    imageUrl:
      "https://images.unsplash.com/photo-1627881802342-a89f2687ee9d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FzaWxhfGVufDB8fDB8fHww",
  },
  {
    href: "/ruang",
    title: "Ruang 2",
    type: "space",
    imageUrl:
      "https://images.unsplash.com/photo-1708320254291-38c06d13733e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhbmNhc2lsYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    href: "/ruang",
    title: "Ruang 3",
    type: "space",
    imageUrl:
      "https://images.unsplash.com/photo-1666533835045-3a1b3dfc3538?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFuY2FzaWxhfGVufDB8fDB8fHww",
  },
  {
    href: "/ruang",
    title: "Ruang 4",
    type: "space",
    imageUrl:
      "https://images.unsplash.com/photo-1666533835131-5cd525e9e965?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFuY2FzaWxhfGVufDB8fDB8fHww",
  },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header ProfileCTA={<ProfileCTA />} />
      <div className="relative min-h-screen w-2/3 mx-auto ">
        <ResizablePanelGroup
          direction="horizontal"
          className="absolute h-screen top-0 left-0 overflow-y-scroll gap-2 pt-2 "
          tagName="main"
        >
          <ResizablePanel
            defaultSize={25}
            className="flex flex-col space-y-4 sticky top-0"
          >
            <span className="text-xs font-bold text-muted-foreground mt-2">
              MENU UTAMA
            </span>
            <nav className="flex flex-col space-y-2">
              {SidebarMenu.map(({ href, icon, title }) => (
                <SidebarItem key={href} href={href} icon={icon} title={title} />
              ))}
            </nav>
            <span className="text-xs font-bold text-muted-foreground">
              RUANG
            </span>
            <div className="flex flex-col space-y-2">
              {SidebarRuang.map(({ href, title, imageUrl, type }) => (
                <SidebarItem
                  key={href}
                  href={href}
                  title={title}
                  imageUrl={imageUrl}
                  type={type}
                />
              ))}
            </div>
            <div className="flex"></div>
          </ResizablePanel>
          <ResizableHandle disabled className="w-0" />
          <ResizablePanel defaultSize={75} className="flex flex-col">
            {children}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}
