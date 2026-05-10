import { site, projects } from '$utils/site';

export const prerender = true;

export function GET() {
  const items = projects
    .map(
      (project) => `
      <item>
        <title>${project.title}</title>
        <link>${site.url}/projects</link>
        <guid>${site.url}/projects/${project.slug}</guid>
        <description>${project.description}</description>
      </item>`
    )
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${site.name}</title>
      <link>${site.url}</link>
      <description>${site.description}</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  });
}
