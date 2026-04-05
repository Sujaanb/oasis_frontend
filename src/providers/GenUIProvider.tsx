import React, { createContext, useContext } from 'react';
import type { GenUIConfig } from '../types';

const GenUIContext = createContext<GenUIConfig | null>(null);

export const GenUIProvider: React.FC<{ config: GenUIConfig; children: React.ReactNode }> = ({ config, children }) => {
  return <GenUIContext.Provider value={config}>{children}</GenUIContext.Provider>;
};

export const useGenUI = () => {
  const ctx = useContext(GenUIContext);
  if (!ctx) throw new Error('useGenUI must be used within GenUIProvider');
  return ctx;
};
