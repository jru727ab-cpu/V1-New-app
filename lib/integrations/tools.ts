// Unified integration manager for all tools
export interface ToolConfig {
  name: string;
  apiKey: string;
  baseUrl?: string;
  enabled: boolean;
  icon: string;
  category: 'development' | 'ai' | 'payment' | 'database' | 'deployment';
}

export interface ToolConnection {
  id: string;
  toolName: string;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: number;
  metadata?: Record<string, any>;
}

// Tool definitions
export const AVAILABLE_TOOLS = {
  GITHUB: {
    name: 'GitHub',
    icon: '🐙',
    category: 'development' as const,
    envKey: 'GITHUB_TOKEN',
  },
  REPLIT: {
    name: 'Replit',
    icon: '⚡',
    category: 'development' as const,
    envKey: 'REPLIT_API_KEY',
  },
  SUPABASE: {
    name: 'Supabase',
    icon: '🚀',
    category: 'database' as const,
    envKey: 'NEXT_PUBLIC_SUPABASE_URL',
  },
  FIREBASE: {
    name: 'Firebase',
    icon: '🔥',
    category: 'database' as const,
    envKey: 'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  },
  STRIPE: {
    name: 'Stripe',
    icon: '💳',
    category: 'payment' as const,
    envKey: 'NEXT_PUBLIC_STRIPE_KEY',
  },
  GROK: {
    name: 'Grok',
    icon: '🧠',
    category: 'ai' as const,
    envKey: 'GROK_API_KEY',
  },
  KIMI: {
    name: 'Kimi',
    icon: '✨',
    category: 'ai' as const,
    envKey: 'KIMI_API_KEY',
  },
  BASE44: {
    name: 'Base44',
    icon: '🔗',
    category: 'database' as const,
    envKey: 'BASE44_API_KEY',
  },
  VERCEL: {
    name: 'Vercel',
    icon: '▲',
    category: 'deployment' as const,
    envKey: 'VERCEL_TOKEN',
  },
  NETLIFY: {
    name: 'Netlify',
    icon: '🎯',
    category: 'deployment' as const,
    envKey: 'NETLIFY_TOKEN',
  },
  COPILOT: {
    name: 'GitHub Copilot',
    icon: '🤖',
    category: 'ai' as const,
    envKey: 'GITHUB_TOKEN',
  },
};

// API client factory
export async function callToolAPI(
  toolName: string,
  endpoint: string,
  options: any = {}
) {
  const baseUrls: Record<string, string> = {
    GITHUB: 'https://api.github.com',
    REPLIT: 'https://api.replit.com',
    SUPABASE: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    STRIPE: 'https://api.stripe.com/v1',
    GROK: 'https://api.x.ai/v1',
  };

  const tool = AVAILABLE_TOOLS[toolName as keyof typeof AVAILABLE_TOOLS];
  if (!tool) throw new Error(`Unknown tool: ${toolName}`);

  const baseUrl = options.baseUrl || baseUrls[toolName];
  const url = `${baseUrl}${endpoint}`;

  const response = await fetch(url, {
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${process.env[tool.envKey]}`,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`${toolName} API error: ${response.statusText}`);
  }

  return response.json();
}
