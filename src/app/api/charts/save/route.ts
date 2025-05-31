export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    const { config, title } = await req.json();
    
    const client = await clientPromise;
    const db = client.db();
    
    const result = await db.collection('charts').insertOne({
      config,
      title,
      createdAt: new Date(),
      updatedAt: new Date()
    });

    return NextResponse.json({ 
      chartId: result.insertedId.toString(),
      message: 'Chart saved successfully' 
    });

  } catch (error) {
    console.error('Save chart error:', error);
    return NextResponse.json(
      { error: 'Failed to save chart' }, 
      { status: 500 }
    );
  }
} 