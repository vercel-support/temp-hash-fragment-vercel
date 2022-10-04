import { NextResponse } from 'next/server';

export async function middleware(request) {
  return NextResponse.redirect(
    new URL('/redirect-here#cool-hash-fragment=yes', "https://www.google.com")
  );
}

export const config = {
  matcher: ['/'],
};
