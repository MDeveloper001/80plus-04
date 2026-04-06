import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white font-montserrat px-6 md:px-12 py-12">
      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-8">
        <a
          href="https://www.linkedin.com/company/80plus-international-limited"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-accent-500 rounded-full transition-all duration-300 hover:bg-accent-500 hover:text-primary-900 hover:scale-110"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.instagram.com/80plusglobal/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center border border-accent-500 rounded-full transition-all duration-300 hover:bg-accent-500 hover:text-primary-900 hover:scale-110"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Links */}
      <div className="max-w-6xl mx-auto mb-8">
        {/* Row 1 */}
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <Link href="/about" className="hover:underline whitespace-nowrap">
            About
          </Link>
          <Link href="/services" className="hover:underline whitespace-nowrap">
            Services
          </Link>
          <Link href="/projects" className="hover:underline whitespace-nowrap">
            Projects
          </Link>
          <Link href="/career" className="hover:underline whitespace-nowrap">
            Career
          </Link>
        </div>

        {/* Row 2 */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            href="/contacts#location"
            className="hover:underline whitespace-nowrap"
          >
            Location
          </Link>
          <Link
            href="/contacts#contact"
            className="hover:underline whitespace-nowrap"
          >
            SiteMap
          </Link>
          <Link href="/contacts" className="hover:underline whitespace-nowrap">
            Contact
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-accent-500 max-w-6xl mx-auto my-6"></div>

      {/* Bottom */}
      <div className="text-center max-w-6xl mx-auto flex flex-col gap-2">
        <p className="text-sm">© 2025 80plus. All rights reserved.</p>
        <Link
          href="/"
          className="text-sm hover:text-accent-500 transition-colors"
        >
          Back To Top ↑
        </Link>
      </div>
    </footer>
  );
}
