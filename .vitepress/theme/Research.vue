<script>
import { data as aimsData } from './research.data.js'

export default {
    data() {
        return {
            aims: aimsData,
        };
    },
    computed: {
        researchAim() {
            // Get the aim where aim.research is true
            return this.aims.find((aim) => aim.isAim);
        }
    }
}
</script>


<template>
    <div class="mx-auto max-w-4xl px-2 md:px-0">
        <div class="pt-8 pb-8 text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-2">{{ researchAim.title }}</h1>
            <div class="h-1 w-16 mx-auto bg-custom-orange rounded mb-1"></div>
        </div>
        <div class="space-y-12">
            <div v-html="researchAim.html" class="research-aims"></div>
        </div>
    </div>
</template>


<style>
.research-aims h1 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1.5rem;
}
.research-aims h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #374151;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    text-decoration: underline;
}
.research-aims h3 {
    font-size: 1.2rem;
    font-weight: 500;
    color: #4b5563;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
}
.research-aims p {
    font-size: 1.08rem;
    color: #555;
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
    text-align: justify;
    text-justify: inter-word;
}
.research-aims img {
    display: block;
    margin: 1.5rem auto 0.5rem auto;
    max-width: 480px;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}
.research-aims figcaption {
    text-align: center;
    font-size: 0.95rem;
    color: #888;
    margin-bottom: 1.5rem;
}
.research-aims .research-section {
    background: #f9fafb;
    border-radius: 12px;
    padding: 1.5rem 1.2rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.research-aims ul, .research-aims ol {
    margin-left: 2rem;
    margin-bottom: 1rem;
}
</style>