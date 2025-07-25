"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Omar Ashraf Portfolio</h1>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </header>
        
        <main className="space-y-8">
          <section className="bg-card text-card-foreground p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Ready to Build</h2>
            <p className="text-muted-foreground">
              The theme system is now corrected. We are ready to start building the portfolio sections.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}