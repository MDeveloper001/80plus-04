"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
  BellIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import CircleIconLink from "@/app/_components/CircleIconLink";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const navLink =
    "px-2 py-2 text-sm font-semibold rounded-md transition-all duration-300 hover:text-accent-500";

  return (
    <nav className="z-50 text-xl relative">
      {/* Desktop */}
      <ul className="hidden md:flex items-center text-primary-900 gap-6 p-0 m-0">
        <li>
          <Link href="/about" className={navLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className={navLink}>
            Services & Expertise
          </Link>
        </li>
        <li>
          <Link href="/projects" className={navLink}>
            Projects
          </Link>
        </li>
        <li>
          <Link href="/career" className={navLink}>
            Careers
          </Link>
        </li>
        <li>
          <Link href="/contacts" className={navLink}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/location" className={navLink}>
            Location
          </Link>
        </li>
      </ul>

      {/* Mobile button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-primary-900 z-50 relative"
      >
        {open ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col pt-20 text-primary-900  transition-transform duration-400 ease-in-out transform ${
          open ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <ul className="flex-1 flex flex-col items-center gap-4 px-4">
          <li className="w-full border-b border-gray-200 py-4 flex justify-between items-center text-lg">
            <Link
              href="/about"
              className={navLink}
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="w-full border-b border-gray-200 py-4 flex justify-between items-center text-lg">
            <Link
              href="/services"
              className={navLink}
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
          </li>
          <li className="w-full border-b border-gray-200 py-4 flex justify-between items-center text-lg">
            <Link
              href="/projects"
              className={navLink}
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="w-full border-b border-gray-200 py-4 flex justify-between items-center text-lg">
            <Link
              href="/career"
              className={navLink}
              onClick={() => setOpen(false)}
            >
              Career
            </Link>
          </li>
          <li className="w-full border-b border-gray-200 py-4 flex justify-between items-center text-lg">
            <Link
              href="/contacts"
              className={navLink}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Optional Footer / Icons */}
        <div className="flex gap-3 p-5 justify-center">
          <CircleIconLink
            href="/text"
            Icon={BellIcon}
            hoverColor="hover:bg-blue-200"
          />
          <CircleIconLink
            href="contect"
            Icon={EnvelopeIcon}
            hoverColor="hover:bg-blue-200"
          />
        </div>
      </div>
    </nav>
  );
}
