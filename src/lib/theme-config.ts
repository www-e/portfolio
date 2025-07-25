export interface ThemeConfig {
  light: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    accent: string;
    muted: string;
    card: string;
    cardForeground: string;
    border: string;
    ring: string;
  };
  dark: {
    primary: string;
    secondary: string;
    background: string;
    foreground: string;
    accent: string;
    muted: string;
    card: string;
    cardForeground: string;
    border: string;
    ring: string;
  };
}

export const themeConfig: ThemeConfig = {
  light: {
    primary: 'oklch(0.208 0.042 265.755)',
    secondary: 'oklch(0.968 0.007 247.896)',
    background: 'oklch(1 0 0)',
    foreground: 'oklch(0.129 0.042 264.695)',
    accent: 'oklch(0.968 0.007 247.896)',
    muted: 'oklch(0.968 0.007 247.896)',
    card: 'oklch(1 0 0)',
    cardForeground: 'oklch(0.129 0.042 264.695)',
    border: 'oklch(0.929 0.013 255.508)',
    ring: 'oklch(0.704 0.04 256.788)',
  },
  dark: {
    primary: 'oklch(0.929 0.013 255.508)',
    secondary: 'oklch(0.279 0.041 260.031)',
    background: 'oklch(0.129 0.042 264.695)',
    foreground: 'oklch(0.984 0.003 247.858)',
    accent: 'oklch(0.279 0.041 260.031)',
    muted: 'oklch(0.279 0.041 260.031)',
    card: 'oklch(0.208 0.042 265.755)',
    cardForeground: 'oklch(0.984 0.003 247.858)',
    border: 'oklch(1 0 0 / 10%)',
    ring: 'oklch(0.551 0.027 264.364)',
  },
};

export type Theme = 'light' | 'dark';
export type SystemTheme = 'light' | 'dark';