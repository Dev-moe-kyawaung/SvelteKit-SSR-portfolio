<script lang="ts">
  export let eyebrow = '';
  export let title = '';
  export let description = '';
</script>

<div class="mb-6">
  <p class="text-sm uppercase tracking-[0.25em] text-zinc-400">{eyebrow}</p>
  <h2 class="mt-2 text-3xl font-semibold">{title}</h2>
  {#if description}
    <p class="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">{description}</p>
  {/if}
</div>
