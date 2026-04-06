"use client";
import { useRouter } from "next/navigation";

export default function BackButton({ fallback = "/" }) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md transition-colors"
    >
      <span className="text-xl">←</span> Back
    </button>
  );
}
