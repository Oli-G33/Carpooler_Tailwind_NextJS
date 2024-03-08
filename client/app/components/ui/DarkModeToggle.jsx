import React from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';
import { useTheme } from 'next-themes';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <Switch
      onClick={() => toggleTheme()}
      size="md"
      color="primary"
      startContent={<MoonIcon />}
      endContent={<SunIcon />}
    ></Switch>
  );
}
