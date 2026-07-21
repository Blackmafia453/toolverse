"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineSparkles,
} from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <div
          className="
          glass
          shadow-soft
          rounded-2xl
          border border-white/40
          h-20
          flex
          items-center
          justify-between
          px-6
          "
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className="
              h-11
              w-11
              rounded-xl
              bg-gradient-to-br
              from-indigo-600
              to-purple-600
              flex
              items-center
              justify-center
              text-white
              shadow-md
              "
            >
              <HiOutlineSparkles className="text-2xl" />
            </div>

            <span
              className="
              text-2xl
              font-extrabold
              tracking-tight
              text-slate-900
              "
            >
              Soup
              <span
                className="
                bg-gradient-to-r
                from-indigo-600
                to-purple-600
                bg-clip-text
                text-transparent
                "
              >
                xor
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="
            hidden
            md:flex
            items-center
            gap-9
            text-sm
            font-semibold
            text-slate-600
            "
          >
            <Link
              href="/"
              className="
              hover:text-indigo-600
              transition
              "
            >
              Home
            </Link>

            <Link
              href="/tools"
              className="
              hover:text-indigo-600
              transition
              "
            >
              Tools
            </Link>

            <Link
              href="/about"
              className="
              hover:text-indigo-600
              transition
              "
            >
              About
            </Link>

            <Link
              href="/contact"
              className="
              hover:text-indigo-600
              transition
              "
            >
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="/tools"
            className="
            hidden
            md:flex
            items-center
            justify-center
            px-6
            py-3
            rounded-xl
            text-white
            font-semibold
            bg-gradient-to-r
            from-indigo-600
            to-purple-600
            shadow-md
            hover:shadow-hover
            hover:-translate-y-0.5
            transition
            "
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
            md:hidden
            text-3xl
            text-slate-700
            "
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="
              md:hidden
              mt-3
              glass
              rounded-2xl
              shadow-soft
              p-6
              "
          >
            <nav
              className="
                flex
                flex-col
                gap-5
                font-semibold
                text-slate-700
                "
            >
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>

              <Link href="/tools" onClick={() => setMenuOpen(false)}>
                Tools
              </Link>

              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>

              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>

              <Link
                href="/tools"
                onClick={() => setMenuOpen(false)}
                className="
                  text-center
                  py-3
                  rounded-xl
                  text-white
                  bg-gradient-to-r
                  from-indigo-600
                  to-purple-600
                  "
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}