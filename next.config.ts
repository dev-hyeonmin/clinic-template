import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true, // 테스트에서만 사용할 것! 보안 이슈
    remotePatterns: [new URL('https://placehold.co/**')],
  },
};

export default nextConfig;
