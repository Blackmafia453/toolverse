import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";


interface ToolButtonProps {
  href: string;
  text?: string;
}


export default function ToolButton({
  href,
  text = "Open Tool",
}: ToolButtonProps) {

  return (

    <Link
      href={href}
      className="
      inline-flex
      items-center
      justify-center
      gap-2
      px-6
      py-3
      rounded-xl
      bg-gradient-to-r
      from-indigo-600
      to-purple-600
      text-white
      font-semibold
      shadow-lg
      shadow-indigo-200
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
      group
      "
    >

      {text}


      <FiArrowRight
        className="
        group-hover:translate-x-1
        transition-transform
        duration-300
        "
      />


    </Link>

  );

}