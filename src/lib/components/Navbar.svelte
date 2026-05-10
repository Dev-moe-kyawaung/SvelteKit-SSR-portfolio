<script lang="ts">
  import { site } from '$utils/site';

  const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];
</script>

<nav class="glass sticky top-0 z-50 border-x-0 border-t-0">
  <div class="container-premium flex items-center justify-between py-4">
    <a href="/" class="text-sm font-semibold tracking-[0.25em] uppercase">{site.name}</a>
    <div class="hidden items-center gap-6 md:flex">
      {#each links as link}
        <a class="text-sm text-zinc-300 transition hover:text-white" href={link.href}>{link.label}</a>
      {/each}
    </div>
  </div>
</nav>
