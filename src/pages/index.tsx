import { useToast } from "~/context/ToastContext";

export default function Home() {
  const { showToast } = useToast();

  return (
    <main className="container min-h-screen">
      <h1 className="font-header text-xl font-bold">Header</h1>
      <p className="font-body">Body text</p>
      <button onClick={() => showToast("Hello", "success")}>Show Toast</button>
    </main>
  );
}
