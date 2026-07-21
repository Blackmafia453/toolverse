export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-14">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-medium text-indigo-700 mb-6">
           Soupxor Support Center
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Contact{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Soupxor
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8">
            Have a question, suggestion, or found an issue with one of our
            tools? Our team would love to hear from you and help improve your
            experience.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-3.5 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
              >
                Send Message
              </button>
            </form>
          </div>


          {/* Support Information */}
          <div className="space-y-6">

            <div className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Get In Touch
              </h2>

              <p className="text-gray-600 leading-7">
                Whether you have feedback, a feature request, or need help
                using our free online tools, we are here to assist you.
              </p>

              <div className="mt-6 rounded-2xl bg-indigo-50 p-5">
                <p className="text-sm text-gray-500">
                  Support Email
                </p>

                <p className="mt-1 text-lg font-semibold text-indigo-700">
                  support@soupxor.com
                </p>
              </div>
            </div>


            {/* Trust Cards */}
            <div className="grid sm:grid-cols-2 gap-5">

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Fast Support
                </h3>
                <p className="text-sm text-gray-600 leading-6">
                  We value every message and aim to provide helpful responses.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-900 mb-2">
                  User Focused
                </h3>
                <p className="text-sm text-gray-600 leading-6">
                  Your feedback helps us build better and more useful tools.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* Bottom Trust Section */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-10 text-center text-white shadow-xl">

          <h2 className="text-3xl font-bold">
            Building Better Free Tools Together
          </h2>

          <p className="mt-4 text-indigo-100 max-w-2xl mx-auto leading-7">
            ToolVerse is continuously improving with new utilities,
            performance updates, and user-driven features.
          </p>

        </div>
      </section>
    </main>
  );
}