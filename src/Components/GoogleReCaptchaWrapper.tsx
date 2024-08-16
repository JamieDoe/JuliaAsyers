"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

type GoogleReCaptchaWrapperProps = {
  children: React.ReactNode;
};

export default function GoogleReCaptchaWrapper({
  children,
}: GoogleReCaptchaWrapperProps) {
  const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY!;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
