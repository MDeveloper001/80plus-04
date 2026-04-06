// app/_components/CircleIconLink.js
"use client";

import Link from "next/link";

export default function CircleIconLink({
  href,
  Icon,
  hoverColor = "hover:bg-blue-200",
  className = "",
}) {
  return (
    <Link
      href={href}
      className={`w-10 h-10 border border-primary-900 rounded-full flex items-center justify-center transition ${hoverColor} ${className}`}
    >
      <Icon className="w-5 h-5 text-primary-900" />
    </Link>
  );
}
