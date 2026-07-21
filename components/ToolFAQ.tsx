type FAQ = {
  question: string;
  answer: string;
};

type ToolFAQProps = {
  faqs: FAQ[];
};

export default function ToolFAQ({ faqs }: ToolFAQProps) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {faq.question}
            </h3>

            <p className="mt-3 text-gray-600 leading-7">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}