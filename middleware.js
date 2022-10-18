import { NextResponse } from 'next/server';

export async function middleware(request) {
  return NextResponse.redirect(
    new URL('/redirect-here#cool-hash-fragment=yes', request.url)
  );
}

export const config = {
  matcher: ['/'],
};
