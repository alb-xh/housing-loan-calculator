import { createContext } from 'react';
import type { Language } from '@/langs';

type ContextValue = [Language, (language: Language) => void];

export const LanguageContext = createContext<ContextValue>({} as ContextValue);
