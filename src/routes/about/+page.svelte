<script lang="ts">
  import Navbar from '$components/Navbar.svelte';
  import Footer from '$components/Footer.svelte';
  import SectionTitle from '$components/SectionTitle.svelte';
  import ExperienceCard from '$components/ExperienceCard.svelte';
  import { experiences, testimonials } from '$utils/site';
</script>

<svelte:head>
  <title>About | Premium Portfolio</title>
</svelte:head>

<Navbar />

<main class="container-premium py-16">
  <SectionTitle eyebrow="About" title="Design-focused developer" description="I build refined digital experiences with a premium feel." />
  <div class="grid gap-8 md:grid-cols-2">
    <div class="space-y-5">
      {#each experiences as experience}
        <ExperienceCard {experience} />
      {/each}
    </div>
    <div class="space-y-5">
      {#each testimonials as testimonial}
        <blockquote class="glass rounded-3xl p-6">
          <p class="text-lg leading-8 text-zinc-100">“{testimonial.quote}”</p>
          <footer class="mt-4 text-sm text-zinc-400">{testimonial.name} · {testimonial.role}</footer>
        </blockquote>
      {/each}
    </div>
  </div>
</main>

<Footer />
