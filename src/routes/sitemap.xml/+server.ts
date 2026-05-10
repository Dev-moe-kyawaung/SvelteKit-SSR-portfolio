import { site, projects } from '$utils/site';

export const prerender = true;

export function GET() {
  const routes = ['/', '/about', '/projects', '/contact', ...projects.map((p) => `/projects/${p.slug}`)];
  const urls = routes
    .map(
      (route) => `
      <url>
        <loc>${site.url}${route}</loc>
      </url>`
    )
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
