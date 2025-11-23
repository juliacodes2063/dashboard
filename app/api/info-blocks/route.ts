import { NextResponse } from 'next/server';
import { delay } from '../utils';
import { infoBlocksMock } from '@/data/dashboard';

export async function GET() {
  await delay(600);
  return NextResponse.json(infoBlocksMock);
}
