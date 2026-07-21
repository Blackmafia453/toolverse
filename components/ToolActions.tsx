type ToolActionsProps = {
  onCopy: () => void;
  onClear: () => void;
  onDownload: () => void;
};

export default function ToolActions({
  onCopy,
  onClear,
  onDownload,
}: ToolActionsProps) {
  return (
    <div className="flex flex-wrap gap-4 mt-6">
      <button
        onClick={onCopy}
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300"
      >
        Copy Text
      </button>

      <button
        onClick={onClear}
        className="px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-300"
      >
        Clear
      </button>

      <button
        onClick={onDownload}
        className="px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-all duration-300"
      >
        Download TXT
      </button>
    </div>
  );
}