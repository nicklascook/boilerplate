import toast from "~/utils/toast";

export default function Home() {
  return (
    <main className="container min-h-screen">
      <h1 className="font-header text-xl font-bold">Header</h1>
      <p className="font-body">Body text</p>
      <button onClick={() => toast("info", "Your image has been generated")}>
        Show Toast
      </button>
    </main>
  );
}
