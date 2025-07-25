"use client";

import { useTheme } from "@/hooks/use-theme";
import { DayNightSwitch } from "@/components/shsfui/switch/day-night-switch";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <DayNightSwitch
      defaultChecked={theme === 'light'}
      onToggle={(checked) => {
        // checked = true means light mode (day)
        // checked = false means dark mode (night)
        const newTheme = checked ? 'light' : 'dark';
        if (newTheme !== theme) {
          toggleTheme();
        }
      }}
      className="w-16 h-8"
    />
  );
}