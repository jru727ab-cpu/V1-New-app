export const config = {
  appName: 'Hybrid Dashboard',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  isProduction: process.env.NODE_ENV === 'production',
};

export const toolCatalog = [
  { name: 'GitHub', icon: '🐙', category: 'development', connected: true },
  { name: 'Replit', icon: '⚡', category: 'development', connected: true },
  { name: 'Supabase', icon: '🚀', category: 'database', connected: true },
  { name: 'Firebase', icon: '🔥', category: 'database', connected: false },
  { name: 'Stripe', icon: '💳', category: 'payment', connected: false },
  { name: 'Grok', icon: '🧠', category: 'ai', connected: false },
  { name: 'Kimi', icon: '✨', category: 'ai', connected: false },
  { name: 'Base44', icon: '🔗', category: 'database', connected: false },
  { name: 'Vercel', icon: '▲', category: 'deployment', connected: false },
  { name: 'Netlify', icon: '🎯', category: 'deployment', connected: false },
  { name: 'Copilot', icon: '🤖', category: 'ai', connected: true },
];

export const defaultRole = 'owner';
