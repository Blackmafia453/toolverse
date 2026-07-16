export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-indigo-50/40 to-white">

      <section className="max-w-5xl mx-auto px-6 py-20">

        {/* Hero */}
        <div className="text-center mb-12">

          <div className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2 text-sm font-medium text-indigo-700 mb-6">
            ToolVerse Privacy
          </div>

          <h1 className="text-5xl font-bold text-gray-900">
            Privacy{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            Your privacy matters to us. Learn how ToolVerse handles
            information when you use our free online tools.
          </p>

        </div>



        <div className="space-y-6">


          <section className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg p-8">

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Information We Collect
            </h2>

            <p className="text-gray-600 leading-7">
              ToolVerse provides browser-based online tools. Most tools can
              be used without creating an account. We may collect limited
              information such as browser data, usage statistics, and
              technical information to improve website performance.
            </p>

          </section>




          <section className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg p-8">

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              How We Use Information
            </h2>

            <p className="text-gray-600 leading-7">
              Information collected through analytics helps us understand
              user behavior, improve our tools, fix issues, and provide a
              better experience for visitors.
            </p>

          </section>




          <section className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg p-8">

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Cookies and Advertising
            </h2>

            <p className="text-gray-600 leading-7">
              ToolVerse may use cookies and third-party services such as
              advertising partners to provide relevant advertisements and
              analyze website traffic.
            </p>

          </section>




          <section className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg p-8">

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Data Security
            </h2>

            <p className="text-gray-600 leading-7">
              We take reasonable measures to maintain website security.
              However, no online service can guarantee complete security.
            </p>

          </section>




          <section className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl shadow-lg p-8">

            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              Contact Us
            </h2>

            <p className="text-gray-600 leading-7">
              If you have questions about this Privacy Policy, contact us
              at:
            </p>

            <p className="mt-3 font-semibold text-indigo-600">
              support@toolverse.com
            </p>

          </section>


        </div>

      </section>

    </main>
  );
}