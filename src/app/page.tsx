"use client";

import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Omar Ashraf Portfolio</h1>
          <ThemeToggle />
        </header>
        
        <main className="space-y-8">
          <section className="bg-card text-card-foreground p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Theme System Test</h2>
            <p className="text-muted-foreground mb-4">
              This is a test page to verify the global theme system is working correctly.
              Try toggling the theme switch above to see the colors change smoothly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-primary text-primary-foreground p-4 rounded">
                Primary Color
              </div>
              <div className="bg-secondary text-secondary-foreground p-4 rounded">
                Secondary Color
              </div>
              <div className="bg-accent text-accent-foreground p-4 rounded">
                Accent Color
              </div>
              <div className="bg-muted text-muted-foreground p-4 rounded">
                Muted Color
              </div>
            </div>
          </section>
          
          <section className="bg-card text-card-foreground p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground">
              The full portfolio with 3D effects, projects showcase, and responsive design 
              will be implemented in the following tasks.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}