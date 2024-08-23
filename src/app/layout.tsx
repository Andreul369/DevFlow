import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';

import './globals.css';
import '../styles/prism.css';

import { GeistSans } from 'geist/font/sans';
import { TailwindIndicator } from '@/context/tailwind-indicator';
import { ThemeProvider } from '@/context/theme-provider';
// import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'DevFlow',
  description:
    'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
  icons: {
    icon: '/assets/images/site-logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={GeistSans.className}>
      {/* <body className={`${inter.variable} ${spaceGrotesk.variable}`}> */}
      <body>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: 'primary-gradient',
              footerActionLink: 'primary-text-gradient hover:text-primary-500',
            },
          }}
        >
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            {children}
            <TailwindIndicator />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
