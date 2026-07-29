import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface RelatedTool {
  title: string;
  description: string;
  href: string;
}

interface ToolRelatedProps {
  title?: string;
  tools: RelatedTool[];
}

export default function ToolRelated({
  title = "Related Tools",
  tools,
}: ToolRelatedProps) {
  if (!tools.length) return null;

  return (
    <section className="mt-16">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="mt-3 text-gray-600">
          Explore more free online tools that work perfectly alongside this
          tool.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group rounded-2xl border border-gray-200 p-5 transition-all hover:border-indigo-500 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {tool.title}
                </h3>

                <FiArrowRight className="text-indigo-600 transition-transform group-hover:translate-x-1" />
              </div>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                {tool.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}