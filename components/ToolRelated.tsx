import Link from "next/link";

type RelatedTool = {
  name: string;
  href: string;
};

type ToolRelatedProps = {
  tools: RelatedTool[];
};

export default function ToolRelated({
  tools,
}: ToolRelatedProps) {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Related Tools
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {tools.map((tool, index) => (
          <Link
            key={index}
            href={tool.href}
            className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="font-semibold text-gray-800">
              {tool.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}