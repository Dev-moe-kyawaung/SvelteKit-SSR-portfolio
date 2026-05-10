import { describe, expect, it } from 'vitest';
import { site, projects } from '$utils/site';

describe('site config', () => {
  it('has a title', () => {
    expect(site.title).toContain('Portfolio');
  });

  it('has projects', () => {
    expect(projects.length).toBeGreaterThan(0);
  });
});
