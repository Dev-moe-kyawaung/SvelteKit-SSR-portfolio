<script lang="ts">
  export let form: { success?: boolean; error?: string } | undefined;
</script>

<form method="POST" class="glass rounded-3xl p-6 md:p-8">
  {#if form?.success}
    <p class="mb-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
      Message sent successfully.
    </p>
  {/if}

  {#if form?.error}
    <p class="mb-4 rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
      {form.error}
    </p>
  {/if}

  <div class="grid gap-4">
    <label class="grid gap-2 text-sm">
      <span>Name</span>
      <input name="name" required class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none" />
    </label>
    <label class="grid gap-2 text-sm">
      <span>Email</span>
      <input name="email" type="email" required class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none" />
    </label>
    <label class="grid gap-2 text-sm">
      <span>Message</span>
      <textarea name="message" rows="6" required class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none"></textarea>
    </label>
    <button class="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-950">Send Message</button>
  </div>
</form>
