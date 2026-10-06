import { NextResponse } from 'next/server';
import { toolCatalog } from '@/lib/config';

export async function GET() {
  return NextResponse.json({
    tools: toolCatalog,
    totalConnected: toolCatalog.filter((tool) => tool.connected).length,
    totalTools: toolCatalog.length,
  });
}
