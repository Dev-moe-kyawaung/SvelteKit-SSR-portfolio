import { site } from '$utils/site';

export const prerender = true;

export function GET() {
  return new Response(`User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}
