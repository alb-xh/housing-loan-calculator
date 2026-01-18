"use client";

import type { Theme } from "./contexts/theme-context";

export const isDarkTheme = () => globalThis?.document?.documentElement?.classList?.contains('dark');
export const isLightTheme = () => !isDarkTheme();
export const getDefaultTheme = (): Theme => isLightTheme() ? 'light' : 'dark';
