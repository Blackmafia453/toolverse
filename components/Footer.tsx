import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white pt-20 pb-8">

      {/* Background Effects */}
      <div className="absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-4">


          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Tool
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Verse
                </span>
              </h2>
            </Link>

            <p className="mt-5 text-slate-400 leading-7">
              Powerful free online tools designed for students,
              developers, creators, and professionals.
            </p>


            <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur">
              100+ Free Online Tools
            </div>

          </div>




          {/* Navigation */}
          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Navigation
            </h3>


            <ul className="space-y-3 text-slate-400">

              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>


              <li>
                <Link href="/tools" className="hover:text-white transition">
                  All Tools
                </Link>
              </li>


              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>


              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>





          {/* Popular Tools */}
          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Popular Tools
            </h3>


            <ul className="space-y-3 text-slate-400">

              <li>
                <Link
                  href="/tools/word-counter"
                  className="hover:text-white transition"
                >
                  Word Counter
                </Link>
              </li>


              <li>
                <Link
                  href="/tools/password-generator"
                  className="hover:text-white transition"
                >
                  Password Generator
                </Link>
              </li>


              <li>
                <Link
                  href="/tools/age-calculator"
                  className="hover:text-white transition"
                >
                  Age Calculator
                </Link>
              </li>


              <li>
                <Link
                  href="/tools/qr-code-generator"
                  className="hover:text-white transition"
                >
                  QR Code Generator
                </Link>
              </li>

            </ul>


          </div>







          {/* Support */}
          <div>

            <h3 className="mb-5 text-lg font-semibold">
              Support
            </h3>


            <p className="text-slate-400 leading-7">
              Need help or want to suggest a new tool?
              Reach out to our support team.
            </p>


            <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">

              <p className="text-sm text-slate-500">
                Email Support
              </p>


              <p className="mt-1 font-medium text-white">
                support@toolverse.com
              </p>

            </div>


          </div>


        </div>






        {/* Bottom Bar */}
        <div
          className="
          mt-14
          border-t
          border-white/10
          pt-6
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          text-sm
          text-slate-500
          "
        >

          <p>
            © 2026 ToolVerse. All Rights Reserved.
          </p>


          <div className="flex gap-5">

            <Link
              href="/privacy-policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>


            <Link
              href="/terms"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>


            <span>
              Built with modern web technology.
            </span>

          </div>


        </div>


      </div>

    </footer>
  );
}