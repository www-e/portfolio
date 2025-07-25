"use client";

import { useTheme } from "@/hooks/use-theme";
import { DayNightSwitch } from "@/components/shsfui/switch/day-night-switch";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(theme === 'light');

  // Sync component state with global theme
  useEffect(() => {
    setIsChecked(theme === 'light');
  }, [theme]);

  const handleToggle = (checked: boolean) => {
    // Add a small delay to prevent rapid toggling
    const newTheme = checked ? 'light' : 'dark';
    if (newTheme !== theme) {
      // Add theme transitioning class to prevent flash
      document.documentElement.classList.add('theme-transitioning');
      
      toggleTheme();
      
      // Remove transitioning class after animation
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transitioning');
      }, 300);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <DayNightSwitch
        defaultChecked={isChecked}
        onToggle={handleToggle}
        className="w-20 h-10 transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      />
      <span className="sr-only">
        Current theme: {theme} mode. Click to switch to {theme === 'light' ? 'dark' : 'light'} mode.
      </span>
    </div>
  );
}