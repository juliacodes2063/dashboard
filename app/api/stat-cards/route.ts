import { NextResponse } from 'next/server';
import { delay } from '../utils';
import { statCardsMock } from '@/data/dashboard';

export async function GET() {
  await delay(800);
  return NextResponse.json(statCardsMock);
}
