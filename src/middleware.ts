import { NextResponse } from 'next/server';

export function middleware() {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

  const res = NextResponse.next();
  res.headers.set(
    'Content-Security-Policy',
    `default-src 'self'; script-src 'self' 'nonce-${nonce}' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none';`
  );
  res.headers.set('x-nonce', nonce);

  return res;
}
