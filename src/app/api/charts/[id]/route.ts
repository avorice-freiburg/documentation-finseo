export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    
    // Validate the ID format
    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { error: 'Invalid chart ID format' }, 
        { status: 400 }
      );
    }
    
    const client = await clientPromise;
    const db = client.db();
    
    const chart = await db.collection('charts').findOne({
      _id: new ObjectId(id)
    });
    
    if (!chart) {
      return NextResponse.json(
        { error: 'Chart not found' }, 
        { status: 404 }
      );
    }
    
    return NextResponse.json({ 
      chart,
      message: 'Chart loaded successfully' 
    });

  } catch (error) {
    console.error('Get chart error:', error);
    return NextResponse.json(
      { error: 'Failed to get chart' }, 
      { status: 500 }
    );
  }
} 