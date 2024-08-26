'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui';

import * as Icons from '@/components/ui/icons';

export default function ThemeToggle(props: {
  align?: 'center' | 'start' | 'end';
  side?: 'top' | 'bottom';
}) {
  const { setTheme, theme } = useTheme();

  const triggerIcon = {
    light: (
      <Icons.Sun className='size-6 text-[#363636] hover:text-[#363636] dark:text-white dark:hover:text-white' />
    ),
    dark: (
      <Icons.Moon className='size-6 text-[#363636] hover:text-[#363636] dark:text-white dark:hover:text-white' />
    ),
    system: (
      <Icons.System className='size-6 text-[#363636] hover:text-[#363636] dark:text-white dark:hover:text-white' />
    ),
  }[theme as 'light' | 'dark' | 'system'];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='sm'
          className='mt-3 gap-1 px-2 text-lg font-semibold text-[#363636] hover:text-[#363636] dark:text-white dark:hover:text-white'
        >
          {triggerIcon}
          <span className='capitalize max-lg:hidden'>{theme}</span>
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={props.align} side={props.side}>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Icons.Sun className='mr-2 size-4' />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Icons.Moon className='mr-2 size-4' />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Icons.System className='mr-2 size-4' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
