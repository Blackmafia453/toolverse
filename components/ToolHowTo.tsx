type ToolHowToProps = {
  title?: string;
  steps: string[];
};

export default function ToolHowTo({
  title = "How to Use",
  steps,
}: ToolHowToProps) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        {title}
      </h2>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
        <ol className="space-y-5">
          {steps.map((step, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                {index + 1}
              </div>

              <p className="text-gray-700 leading-7">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}