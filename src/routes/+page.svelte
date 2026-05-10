<script lang="ts">
  import { onMount } from 'svelte';

  const featuredProjects = [
    {
      name: 'Astra Studio',
      tag: 'Brand system',
      description: 'A high-end brand and marketing site with premium motion and conversion-focused sections.'
    },
    {
      name: 'Nova SaaS',
      tag: 'Product launch',
      description: 'A sleek SaaS landing experience with SSR, SEO, and polished content hierarchy.'
    },
    {
      name: 'Portfolio OS',
      tag: 'Personal brand',
      description: 'A modern developer portfolio designed for performance, clarity, and premium presentation.'
    }
  ];

  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Dev Moe Kyawaung | Premium SvelteKit Portfolio</title>
  <meta
    name="description"
    content="Premium SvelteKit SSR portfolio starter with luxury design, strong SEO, and modern sections."
  />
  <meta property="og:title" content="Dev Moe Kyawaung | Premium SvelteKit Portfolio" />
  <meta
    property="og:description"
    content="Luxury dark-gradient portfolio starter built with SvelteKit and Tailwind."
  />
</svelte:head>

<div class="min-h-screen bg-premium">
  <header class="container-premium flex items-center justify-between py-6">
    <a class="text-sm tracking-[0.3em] uppercase text-zinc-300" href="/">Dev Moe</a>
    <nav class="hidden gap-6 text-sm text-zinc-300 md:flex">
      <a href="/projects">Projects</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  </header>

  <main class="container-premium pb-24 pt-14 md:pt-24">
    <section class="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
      <div>
        <p class="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-zinc-300">
          PREMIUM SVELTEKIT SSR PORTFOLIO
        </p>
        <h1 class="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Building elegant digital experiences with a <span class="text-gradient">premium edge</span>.
        </h1>
        <p class="mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">
          I design and build fast, modern portfolio and product websites with clean architecture, SSR, and refined visuals.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <a class="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950 transition hover:scale-[1.02]" href="/projects">
            View Projects
          </a>
          <a class="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10" href="/contact">
            Contact Me
          </a>
        </div>
      </div>

      <div class="glass rounded-3xl p-6 shadow-glow">
        <div class="rounded-2xl border border-white/10 bg-black/20 p-5">
          <p class="text-xs uppercase tracking-[0.3em] text-zinc-400">Current Focus</p>
          <p class="mt-3 text-2xl font-semibold">SvelteKit, Tailwind, TypeScript</p>
          <p class="mt-2 text-sm text-zinc-300">
            SSR-ready portfolio systems with premium UI, SEO, and strong performance.
          </p>
        </div>

        <div class="mt-5 grid grid-cols-3 gap-4">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-xs text-zinc-400">Speed</p>
            <p class="mt-2 text-lg font-semibold">Fast</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-xs text-zinc-400">Design</p>
            <p class="mt-2 text-lg font-semibold">Premium</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-xs text-zinc-400">SEO</p>
            <p class="mt-2 text-lg font-semibold">Strong</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-20">
      <div class="mb-6 flex items-end justify-between">
        <div>
          <p class="text-sm uppercase tracking-[0.25em] text-zinc-400">Featured Work</p>
          <h2 class="mt-2 text-3xl font-semibold">Selected projects</h2>
        </div>
        <a class="text-sm text-zinc-300 hover:text-white" href="/projects">See all</a>
      </div>

      <div class="grid gap-5 md:grid-cols-3">
        {#each featuredProjects as project}
          <article class="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/15">
            <p class="text-xs uppercase tracking-[0.25em] text-zinc-400">{project.tag}</p>
            <h3 class="mt-4 text-2xl font-semibold">{project.name}</h3>
            <p class="mt-3 text-sm leading-6 text-zinc-300">{project.description}</p>
          </article>
        {/each}
      </div>
    </section>
  </main>
</div>
