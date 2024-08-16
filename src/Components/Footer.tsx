import Link from "next/link";

import { NewsLetterSignUp } from "./NewsLetterSignUp";
import { siteConfig } from "@/data/siteData/siteConfig";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="container pb-4">
      <div className="pb-32 grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-2">
        <NewsLetterSignUp />
        <div className="w-full flex items-end justify-center md:justify-end gap-2">
          <Link href="https://www.instagram.com/juliasart55/" target="_blank">
            <Instagram className="h-6 w-6 text-muted-foreground cursor-pointer hover:text-black duration-150" />
          </Link>
          <Link href="https://www.facebook.com/juliaayersart/" target="_blank">
            <Facebook className="h-6 w-6 text-muted-foreground cursor-pointer hover:text-black duration-150" />
          </Link>
        </div>
      </div>
      <div>
        <p className="text-center text-xs text-muted-foreground">
          &copy; {currentYear} {siteConfig.clientName}. All rights reserved. |{" "}
          <span>
            Website created by{" "}
            <Link href={siteConfig.developedBy.url} className="hover:underline">
              {siteConfig.developedBy.name}
            </Link>
          </span>
          <span className="block">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
}
