<script lang="ts">
  import '../app.css';
  export let data;
</script>

<svelte:head>
  <meta name="description" content={data?.site?.description ?? 'Premium SvelteKit SSR portfolio'} />
</svelte:head>

<slot />
