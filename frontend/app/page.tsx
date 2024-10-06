import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container mx-auto mb-4 px-4 flex flex-col items-center min-h-screen pt-16">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-foreground text-4xl font-bold mb-6">
          Welcome to PolicySwipe
        </h1>
        <p className="text-xl mb-8">
          A new and engaging way to participate in democracy
        </p>
        <div className="bg-zinc-100 dark:bg-zinc-800 p-8 rounded-lg shadow-md border border-border mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-card-foreground">
            How It Works
          </h2>
          <p className="text-muted-foreground mb-4">
            PolicySwipe introduces a novel approach to voting on policies:
          </p>
          <ul className="list-disc list-inside text-left mb-4">
            <li>Browse through policy proposals</li>
            <li>Swipe right if you agree with a policy</li>
            <li>Swipe left if you disagree</li>
            <li>Your choices are recorded instantly</li>
          </ul>
          <p className="text-muted-foreground">
            It's that simple! Engage with politics in a fun, interactive way.
          </p>
        </div>
        <Link
          href="/polls"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Start Swiping
        </Link>
      </div>
    </div>
  );
}
