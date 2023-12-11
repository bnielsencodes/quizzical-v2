"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full text-2xl font-extrabold">
        <h1 className="text-7xl">404</h1>
        <h2 className="mt-4 mb-6 text-4xl">Page Not Found</h2>
        <button
        >
          <Link href="/">Return Home</Link>
        </button>
      </div>
    </div>
  );
}
