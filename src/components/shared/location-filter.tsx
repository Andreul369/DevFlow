'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Image from 'next/image';
import { ScrollArea } from '../ui/scroll-area';

const frameworks: { value: string; label: string }[] = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

const LocationFilter = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='default'
          role='combobox'
          aria-expanded={open}
          className='light-border background-light800_dark300 text-dark500_light700 flex min-h-[46px] justify-between'
        >
          <Image
            src='/assets/icons/carbon-location.svg'
            alt='Location'
            height={20}
            width={20}
          />
          <p className='flex'>
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : 'Select Location'}
            <ChevronsUpDown className='ml-2 size-4 shrink-0 opacity-50' />
          </p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='text-dark500_light700 w-[200px] border-none border-slate-200 bg-light-900 p-0 outline-none dark:bg-slate-950'>
        <ScrollArea className='h-[350px]'>
          <Command>
            <CommandInput
              placeholder='Search location...'
              className='text-dark500_light700'
            />
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue: React.SetStateAction<string>) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                  className='text-dark500_light700'
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      value === framework.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
};

export default LocationFilter;
