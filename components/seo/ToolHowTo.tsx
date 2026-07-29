interface ToolHowToProps {
  title?: string;
  steps: string[];
}

export default function ToolHowTo({
  title = "How to Use This Tool",
  steps,
}: ToolHowToProps) {
  if (!steps.length) return null;

  return (
    <section className="mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          {title}
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                {index + 1}
              </div>

              <p className="leading-7 text-slate-600">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}