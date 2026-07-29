interface ToolContentSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

interface ToolContentProps {
  title?: string;
  intro?: string;
  sections: ToolContentSection[];
}

export default function ToolContent({
  title = "About This Tool",
  intro,
  sections,
}: ToolContentProps) {
  if (!sections.length) return null;

  return (
    <section className="mt-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        {intro && (
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {intro}
          </p>
        )}

        <div className="mt-12 space-y-12">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold text-slate-900">
                {section.heading}
              </h3>

              <div className="mt-5 space-y-5">
                {section.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.list && section.list.length > 0 && (
                <ul className="mt-6 space-y-3 list-disc pl-6 text-slate-600">
                  {section.list.map((item, i) => (
                    <li key={i} className="leading-7">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}