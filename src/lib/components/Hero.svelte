<script lang="ts">
  export let title = '';
  export let subtitle = '';
  export let primaryHref = '/contact';
  export let primaryLabel = 'Contact';
  export let secondaryHref = '/projects';
  export let secondaryLabel = 'Projects';
</script>

<section class="container-premium py-16 md:py-24">
  <p class="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs tracking-[0.25em] text-zinc-300">
    PREMIUM PORTFOLIO
  </p>
  <h1 class="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
    {title}
  </h1>
  <p class="mt-6 max-w-2xl text-base leading-7 text-zinc-300 md:text-lg">{subtitle}</p>
  <div class="mt-8 flex flex-wrap gap-4">
    <a class="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950" href={primaryHref}>{primaryLabel}</a>
    <a class="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white" href={secondaryHref}>{secondaryLabel}</a>
  </div>
</section>
