<script lang="ts">
  import type { Project } from '$types/site';
  export let project: Project;
</script>

<article class="glass rounded-3xl p-6 transition hover:-translate-y-1 hover:border-white/15">
  <p class="text-xs uppercase tracking-[0.25em] text-zinc-400">{project.year}</p>
  <h3 class="mt-4 text-2xl font-semibold">{project.title}</h3>
  <p class="mt-3 text-sm leading-6 text-zinc-300">{project.description}</p>
  <div class="mt-4 flex flex-wrap gap-2">
    {#each project.stack as item}
      <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">{item}</span>
    {/each}
  </div>
</article>
