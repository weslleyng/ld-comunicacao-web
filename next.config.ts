import type { NextConfig } from "next";
import path from "path";

// Content Security Policy in Report-Only mode: violations are reported (browser
// console) but nothing is blocked, so it can be tuned against real traffic
// before switching to an enforced `Content-Security-Policy`. Sources cover
// first-party assets, Google Analytics 4 and the Instagram embed.
const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "object-src 'none'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.instagram.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://*.cdninstagram.com https://*.fbcdn.net",
  "font-src 'self'",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://region1.google-analytics.com",
  "frame-src https://www.instagram.com https://www.facebook.com",
].join("; ");

// Security headers ported from the previous static-hosting vercel.json.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "geolocation=(), microphone=(), camera=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy-Report-Only", value: contentSecurityPolicy },
];

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (a stray lockfile in the user's
  // home dir otherwise makes Next infer the wrong root).
  outputFileTracingRoot: path.join(__dirname),
  // Serve AVIF (smaller than WebP for photos) when the browser supports it,
  // falling back to WebP otherwise.
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
