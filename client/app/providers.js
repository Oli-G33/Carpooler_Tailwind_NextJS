'use client';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';

export default function Providers({ children }) {
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export function NextUIProviders({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
