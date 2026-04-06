// app/test-spinner/page.js
import Spinner from "@/app/_components/Spinner";

export default function TestSpinnerPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-primary-200">
      <h1 className="text-xl font-semibold text-primary-900">Spinner Test</h1>

      <p>Default Spinner:</p>
      <Spinner />

      <p>Mini Spinner:</p>
      <Spinner mini={true} />
    </div>
  );
}