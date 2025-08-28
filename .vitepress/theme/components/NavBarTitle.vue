<script>
export default {
    methods: {
        handleTitleClick() {
            this.$emit('title-clicked');
        }
    }
}
</script>

<template>
  <div class="flex items-center">
    <a href="https://smart.org.cn/en/" class="flex items-center no-underline" @click="handleTitleClick">
      <img src="/images/smart.png" alt="Logo" class="h-8 w-30 mr-5" />
    </a>
    <a href="/" class="flex items-center no-underline" @click="handleTitleClick">
      <span class="title text-xl font-bold text-custom-orange">
        Leyao Wang Lab
      </span>
    </a>
  </div>
</template>

<style>
a {
    text-decoration: none;
}

.title {
    font-family: 'Space Grotesk', sans-serif;
}
</style>
