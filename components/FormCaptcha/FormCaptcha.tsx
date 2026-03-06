"use client";

import { Turnstile } from "@marsidev/react-turnstile";

const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export interface FormCaptchaProps {
  onVerify: (token: string) => void;
  onExpire?: () => void;
}

export default function FormCaptcha({ onVerify, onExpire }: FormCaptchaProps) {
  if (!siteKey) {
    return null;
  }

  return (
    <Turnstile
      siteKey={siteKey}
      onSuccess={onVerify}
      onExpire={onExpire}
      options={{
        theme: "light",
        size: "normal",
      }}
    />
  );
}
