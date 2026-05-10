<script lang="ts">
  import { site } from '$utils/site';
</script>

<footer class="border-t border-white/10">
  <div class="container-premium flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
    <p class="text-sm text-zinc-400">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    <div class="flex gap-4 text-sm text-zinc-300">
      <a href={site.social.github}>GitHub</a>
      <a href={site.social.linkedin}>LinkedIn</a>
      <a href={site.social.x}>X</a>
    </div>
  </div>
</footer>
