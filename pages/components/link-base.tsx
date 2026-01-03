import Link from "next/link";

export default function LinkBase({ text, href }) {
  return (
    <Link className="hover:outline rounded-md px-1 py-0.5" href={href}>
      {text}
    </Link>
  );
}
