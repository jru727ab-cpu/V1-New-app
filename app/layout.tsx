import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hybrid Dashboard | Your Personal Command Center',
  description: 'Unified access to GitHub, Replit, Supabase, Firebase, Stripe, AI tools, and more',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
