<script lang="ts">
  import Navbar from '$components/Navbar.svelte';
  import Footer from '$components/Footer.svelte';
  import SectionTitle from '$components/SectionTitle.svelte';
  import ContactForm from '$components/ContactForm.svelte';
  export let form;
</script>

<svelte:head>
  <title>Contact | Premium Portfolio</title>
</svelte:head>

<Navbar />

<main class="container-premium py-16">
  <SectionTitle eyebrow="Contact" title="Start a project" description="Tell me about your idea, timeline, and goals." />
  <div class="grid gap-8 md:grid-cols-[.9fr_1.1fr]">
    <div class="glass rounded-3xl p-6 md:p-8">
      <p class="text-sm uppercase tracking-[0.25em] text-zinc-400">Let’s build</p>
      <p class="mt-4 text-2xl font-semibold">Premium websites that feel sharp and modern.</p>
      <p class="mt-3 text-sm leading-6 text-zinc-300">Fast delivery, clean code, and a polished user experience.</p>
    </div>
    <ContactForm {form} />
  </div>
</main>

<Footer />
