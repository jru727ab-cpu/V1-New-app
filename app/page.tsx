'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="container-main">
      <div className="min-h-screen flex flex-col items-center justify-center">
        {/* Header */}
        <header className="absolute top-0 w-full p-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">⚡ Hybrid Dashboard</h1>
          <nav className="flex gap-4">
            <Link href="/login" className="btn-secondary">
              Login
            </Link>
            <Link href="/signup" className="btn-primary">
              Sign Up
            </Link>
          </nav>
        </header>

        {/* Hero Section */}
        <main className="text-center max-w-4xl px-6">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Your Personal Command Center
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            One dashboard to rule them all. Seamlessly integrate GitHub, Replit, Supabase,
            Firebase, Stripe, AI tools (Grok, Kimi), and more.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mb-16">
            <Link href="/signup" className="btn-primary text-lg">
              Get Started Free
            </Link>
            <Link href="#features" className="btn-secondary text-lg">
              Learn More
            </Link>
          </div>

          {/* Feature Grid */}
          <section id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {features.map((feature, idx) => (
              <div key={idx} className="card">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </section>

          {/* Tool Integrations */}
          <section className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Connected Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
              {tools.map((tool, idx) => (
                <div key={idx} className="card text-center">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <p className="font-semibold text-gray-900">{tool.name}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

const features = [
  {
    icon: '🔐',
    title: 'Secure Authentication',
    description: 'OAuth2 with GitHub, email/password, and multi-factor authentication support',
  },
  {
    icon: '🎯',
    title: 'Admin Dashboard',
    description: 'Owner and admin privileges with full audit logs and granular permissions',
  },
  {
    icon: '🚀',
    title: 'One-Click Deployments',
    description: 'Deploy to Vercel or Netlify directly from your dashboard',
  },
  {
    icon: '💾',
    title: 'Real-time Database',
    description: 'Supabase + Firebase integration for real-time data sync',
  },
  {
    icon: '💳',
    title: 'Payment Ready',
    description: 'Stripe integration for subscriptions and payments',
  },
  {
    icon: '🤖',
    title: 'AI Powered',
    description: 'Grok and Kimi for intelligent features and automation',
  },
];

const tools = [
  { icon: '🐙', name: 'GitHub' },
  { icon: '⚡', name: 'Replit' },
  { icon: '🚀', name: 'Supabase' },
  { icon: '🔥', name: 'Firebase' },
  { icon: '💳', name: 'Stripe' },
  { icon: '🧠', name: 'Grok' },
  { icon: '✨', name: 'Kimi' },
  { icon: '🔗', name: 'Base44' },
  { icon: '▲', name: 'Vercel' },
  { icon: '🎯', name: 'Netlify' },
];
