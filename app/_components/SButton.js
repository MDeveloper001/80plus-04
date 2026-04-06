import Link from "next/link";

export function Button({ href, children, className }) {
  return (
    <Link
      href={href}
      className={`inline-block px-6 py-3 font-semibold border border-primary-900 text-primary-900 rounded transition-all duration-300 hover:bg-accent-500 hover:text-primary-900 ${className}`}
    >
      {children}
    </Link>
  );
}
