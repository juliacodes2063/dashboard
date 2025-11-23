import { NextResponse } from 'next/server';
import { delay } from '../utils';
import { inventoryMock } from '@/data/dashboard';

export async function GET() {
  await delay(1500);
  return NextResponse.json(inventoryMock);
}
