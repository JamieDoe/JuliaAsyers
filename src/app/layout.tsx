import type { Metadata } from "next";
import { Lora } from "next/font/google";

import "./globals.css";
import { Header } from "@/Components";
import Footer from "@/Components/Footer";
import GoogleReCaptchaWrapper from "@/Components/GoogleReCaptchaWrapper";

const lora = Lora({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: {
    default: "Julia Ayers | Contemporary & Abstract Art",
    template: "%s | Julia Ayers | Contemporary & Abstract Art",
  },
  description:
    "Julia Ayers is a contemporary and abstract artist based in Hampshire, Uk. Her Art has featured in Southampton City Art Gallery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <GoogleReCaptchaWrapper>
          <Header />
          {children}
          <Footer />
        </GoogleReCaptchaWrapper>
      </body>
    </html>
  );
}
