import Link from "next/link";

type ToolHeaderProps = {
  title: string;
  description: string;
};

export default function ToolHeader({
  title,
  description,
}: ToolHeaderProps) {
  return (
    <div className="mb-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition"
      >
        ← Back to Home
      </Link>

      <div className="mt-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}