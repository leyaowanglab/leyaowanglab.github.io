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
    <a href="/" class="flex items-center no-underline" @click="handleTitleClick">
        <!-- <img src="/images/icon.png" alt="Logo" class="h-8 w-8 mr-2"> -->
        <span class="title text-lg font-bold text-custom-orange collapse sm:visible">Leyao Wang Lab</span>
    </a>
</template>

<style>
a {
    text-decoration: none;
}

.title {
    font-family: 'Space Grotesk', sans-serif;
}
</style>
