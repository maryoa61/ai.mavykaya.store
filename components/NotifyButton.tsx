"use client";

import { useLang } from "./LanguageProvider";

type Props = { productName: string; label: string; className?: string; iconClass?: string };

// Opens an email to support with the product name. Nothing is stored, so no "saved" message.
export default function NotifyButton({ productName, label, className, iconClass = "h-4 w-4" }: Props) {
  const { lang } = useLang();

  function onClick() {
    const subject = (lang === "fa" ? "اطلاع از افتتاح فروشگاه: " : "Notify me at launch: ") + productName;
    window.location.href = "mailto:support@mavykaya.store?subject=" + encodeURIComponent(subject);
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={iconClass}>
        <path d="M10 3.2a4.6 4.6 0 0 0-4.6 4.6v2.7L4 13.3h12l-1.4-2.8V7.8A4.6 4.6 0 0 0 10 3.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.4 15.8a1.7 1.7 0 0 0 3.2 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </button>
  );
}
