<script setup>
</script>

<template>
  <div class="maintenance-page">
    <div class="maintenance-card">
      <div class="maintenance-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      </div>
      <h1 class="maintenance-title">Site under maintenance</h1>
      <p class="maintenance-desc">
        This website is temporarily offline for security maintenance.
        <br />
        We will be back soon. Thank you for your patience.
      </p>
      <p class="maintenance-sub">网站正在进行安全维护，暂时无法访问，敬请谅解。</p>
    </div>
  </div>
</template>

<style scoped>
.maintenance-page {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

.maintenance-card {
  text-align: center;
  max-width: 30rem;
}

.maintenance-icon {
  color: #6b7280;
  display: inline-flex;
  margin-bottom: 1.25rem;
}

.maintenance-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.75rem;
  letter-spacing: -0.01em;
}

.maintenance-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: #4b5563;
  margin: 0 0 0.5rem;
}

.maintenance-sub {
  font-size: 0.9rem;
  color: #9ca3af;
}
</style>