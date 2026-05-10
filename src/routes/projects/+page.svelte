<script lang="ts">
  import Navbar from '$components/Navbar.svelte';
  import Footer from '$components/Footer.svelte';
  import SectionTitle from '$components/SectionTitle.svelte';
  import ProjectCard from '$components/ProjectCard.svelte';
  import { projects } from '$utils/site';
</script>

<svelte:head>
  <title>Projects | Premium Portfolio</title>
</svelte:head>

<Navbar />

<main class="container-premium py-16">
  <SectionTitle eyebrow="Projects" title="Selected work" description="A curated set of premium builds with strong UI and performance." />
  <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</main>

<Footer />
