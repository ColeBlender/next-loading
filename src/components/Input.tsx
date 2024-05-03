"use client";

import Link from "next/link";

function Input() {
  return (
    <div className="flex gap-4 mb-5">
      <Link
        href={"?total=5"}
        className="bg-zinc-500 w-40 py-2 rounded-md text-center"
      >
        5
      </Link>
      <Link
        href={"?total=10"}
        className="bg-zinc-500 w-40 py-2 rounded-md text-center"
      >
        10
      </Link>
    </div>
  );
}

export default Input;
