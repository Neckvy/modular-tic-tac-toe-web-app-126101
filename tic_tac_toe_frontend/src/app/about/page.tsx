import React from "react";

export default function About() {
  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-secondary mb-4">
        About Tic Tac Toe
      </h1>
      <p className="text-lg">
        This is a modern, minimalistic, and accessible Tic Tac Toe game built using <span className="font-semibold">Next.js</span> and <span className="font-semibold">Tailwind CSS</span>.
        <br/><br/>
        The game demonstrates atomic modular component design, responsive and mobile-first layout, and robust state management—all while supporting accessibility and theming.
        <br/><br/>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline"
        >
          View the project repo on GitHub
        </a>
      </p>
      <p className="mt-6 text-base text-gray-500 dark:text-gray-300">
        Theme colors:
        <span className="mx-1 px-2 py-1 rounded-sm bg-primary text-black font-mono text-sm">#e1ff00</span>
        <span className="mx-1 px-2 py-1 rounded-sm bg-secondary text-white font-mono text-sm">#0008ff</span>
        <span className="mx-1 px-2 py-1 rounded-sm bg-accent text-white font-mono text-sm">#F59E42</span>
      </p>
    </div>
  );
}
