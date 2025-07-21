/** Modern, centered landing page for Tic Tac Toe game app. */
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[75vh] gap-8 px-2">
      <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-secondary tracking-tight">
        Welcome to Tic Tac Toe!
      </h1>
      <p className="text-lg text-center max-w-xl mb-4">
        Play a simple, modern, and responsive Tic Tac Toe game.<br />
        Built with <span className="text-primary">Next.js</span> and <span className="text-accent">Tailwind CSS</span>. Accessible, atomic, and fun.
      </p>
      <div className="flex gap-6 my-2">
        <Link
          href="/play"
          className="px-6 py-3 rounded-lg bg-primary text-black font-bold text-lg transition hover:bg-primary/90 focus-visible:ring-2 ring-primary focus:outline-none"
        >Play Now</Link>
        <Link
          href="/about"
          className="px-6 py-3 rounded-lg border border-secondary text-secondary font-bold text-lg transition hover:bg-secondary/10 focus-visible:ring-2 ring-secondary focus:outline-none"
        >About</Link>
      </div>
      <div className="text-gray-500 dark:text-gray-300 italic text-base mt-10">
        Powered by <span className="text-primary">process.env.NEXT_PUBLIC_API_URL</span>
      </div>
    </section>
  );
}
