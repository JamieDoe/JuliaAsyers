import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { navigationLinks } from "@/data/siteData/navigationLinks";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "./ui/drawer";
import { DialogTitle } from "./ui/dialog";
import { buttonVariants } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky inset-0 w-full bg-background z-50 shadow-xl shadow-black/[2%]">
      <div className="relative container flex flex-col items-center pt-2">
        {/* Logo - Desktop & Mobile */}
        <Link href="/" className="pb-4 md:pb-0">
          {" "}
          <Image
            src="/images/signature.png"
            alt="Client Logo"
            width={100}
            height={50}
            priority
          />
        </Link>

        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}

function DesktopNav() {
  return (
    <div className="hidden md:flex gap-4 w-full justify-center pb-2">
      <nav className="flex gap-4">
        {navigationLinks.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className={`text-muted-foreground font-normal text-[16px] ${buttonVariants(
              {
                variant: "linkHover2",
              }
            )}`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function MobileNav() {
  return (
    <div className="flex md:hidden w-full justify-end">
      <Drawer direction="right">
        <DrawerTrigger>
          {/* replace with logo */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 p-4">
            <Menu />
          </div>
        </DrawerTrigger>

        <DrawerContent className="block md:hidden">
          <DrawerClose className="absolute top-0 right-0 p-4">
            <X />
          </DrawerClose>
          <DialogTitle className="sr-only">Mobile Navigation</DialogTitle>

          <nav className="flex flex-col items-end h-full font-normal gap-4 pt-10">
            {navigationLinks.map(({ label, href }) => (
              <DrawerClose asChild key={label}>
                <Link
                  href={href}
                  className={`text-muted-foreground font-normal text-xl ${buttonVariants(
                    {
                      variant: "linkHover2",
                      size: "lg",
                    }
                  )}`}
                >
                  {label}
                </Link>
              </DrawerClose>
            ))}
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
