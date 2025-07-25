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

  return (
    <div className="flex items-center space-x-2">
      <DayNightSwitch
        defaultChecked={isChecked}
        onToggle={toggleTheme} // Directly use the toggleTheme function from the context
        className="w-20 h-10 transition-all duration-300 hover:scale-105 focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      />
    </div>
  );
}