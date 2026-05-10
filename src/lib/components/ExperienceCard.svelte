<script lang="ts">
  import type { Experience } from '$types/site';
  export let experience: Experience;
</script>

<div class="glass rounded-3xl p-6">
  <div class="flex items-center justify-between gap-4">
    <div>
      <h3 class="text-xl font-semibold">{experience.role}</h3>
      <p class="text-sm text-zinc-400">{experience.company}</p>
    </div>
    <p class="text-xs uppercase tracking-[0.25em] text-zinc-400">{experience.period}</p>
  </div>
  <p class="mt-4 text-sm leading-6 text-zinc-300">{experience.summary}</p>
</div>
