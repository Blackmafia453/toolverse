interface FAQItem {
  question: string;
  answer: string;
}

interface ToolFAQProps {
  title?: string;
  faqs: FAQItem[];
}

export default function ToolFAQ({
  title = "Frequently Asked Questions",
  faqs,
}: ToolFAQProps) {
  if (!faqs.length) return null;

  return (
    <section className="mt-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          {title}
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}