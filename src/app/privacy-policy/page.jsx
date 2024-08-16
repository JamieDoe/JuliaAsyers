import ReactMarkdown from "react-markdown";
import Link from "next/link";

import { siteConfig } from "@/data/siteData/siteConfig";
import { Url } from "next/dist/shared/lib/router/router";

const components = {
  h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
  h3: ({ children }) => <h3 className="text-2xl font-bold">{children}</h3>,
  h4: ({ children }) => <h4 className="text-xl font-bold">{children}</h4>,
  h5: ({ children }) => <h5 className="text-lg font-bold">{children}</h5>,
  h6: ({ children }) => <h6 className="text-base font-bold">{children}</h6>,
  p: ({ children }) => <p className="text-base">{children}</p>,
  ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
  ol: ({ children }) => (
    <ol className="list-decimal list-inside">{children}</ol>
  ),
  li: ({ children }) => <li className="text-base">{children}</li>,
  a: ({ children, href }) => (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:underline"
    >
      {children}
    </Link>
  ),
};

export default function PrivacyPolicy() {
  return (
    <main className="container">
      <section className="max-w-screen-md flex flex-col gap-20 items-center py-20 m-auto">
        <h2 className="animate-slidein [--slidein-delay:300ms] opacity-0 text-4xl font-bold w-full">
          Privacy Policy
          <hr className="w-20 h-0.5 bg-primary rounded-full mt-4" />
        </h2>
        <div className="animate-slidein [--slidein-delay:500ms] opacity-0 w-full">
          <ReactMarkdown
            components={components}
            className="flex flex-col gap-4"
          >
            {siteConfig.privacyPolicy}
          </ReactMarkdown>
        </div>
      </section>
    </main>
  );
}
