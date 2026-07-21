type Stat = {
  title: string;
  value: string | number;
  color: string;
};

type ToolStatsProps = {
  stats: Stat[];
};

export default function ToolStats({ stats }: ToolStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center"
        >
          <h2 className={`text-3xl font-bold ${stat.color}`}>
            {stat.value}
          </h2>

          <p className="mt-2 text-gray-600 font-medium">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
}