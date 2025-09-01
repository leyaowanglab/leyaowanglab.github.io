<script>
import { data as aimsData } from './research.data.js'

export default {
    data() {
        return {
            aims: aimsData,
            meta: ["Early Life Microbiome", "Maternal Strain Transmission", "Asthma", "Extreme Weather", "Lung Infections & Diseases"],
            currentMeta: 'Early Life Microbiome',
            metaIndex: -1,
            intervalId: null,
            //colors: ["#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74", "#80BA5A", "#E68310", "#008695", "#CF1C90", "#f97b72", "#4b4b8f", "#A5AA99"],
            colors: ["#CF1C90", "#f97b72", "#4b4b8f", "#A5AA99", "#7F3C8D", "#11A579", "#3969AC", "#F2B701", "#E73F74", "#80BA5A", "#E68310", "#008695"],
            useOpacity: true, // Toggle to apply opacity to background color
            opacityLevel: 0.1, // Background color opacity level
            //currentColor: '#000000', // default color
            //currentColor: '#3969AC',
            currentColor: '#CF1C90',
        };
    },
    mounted() {
        this.intervalId = setInterval(this.updateVirus, 4000); // Update virus every 5 seconds
    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
    methods: {
        updateVirus() {
            this.metaIndex = (this.metaIndex + 1) % this.meta.length;
            this.currentMeta = this.meta[this.metaIndex];
            this.currentColor = this.colors[this.metaIndex];
        },
        getBackgroundWithOpacity(color) {
            if (!this.useOpacity) return color;
            let rgb = color.match(/\w\w/g).map(x => parseInt(x, 16));
            return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${this.opacityLevel})`;
        },
    },
    computed: {
        sortedAims() {
            return this.aims.sort((a, b) => a.order - b.order);
        }
    }
}
</script>

<template>
    <div class="mx-auto max-w-4xl px-4 text-left flex flex-col">
        <div class="flex-grow">
            <h1 class="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-gray-800 select-none mb-8">
                Welcome to the <span class="block font-bold">Leyao Wang Lab</span>
            </h1>
            <p class="text-xl md:text-2xl lg:text-3xl text-gray-600 mt-2 lg:mt-4 select-none">
                Our lab focuses on the human microbiome and diseases: 
                <transition name="fade" mode="out-in">
                    <span :key="currentMeta" 
                        :style="{ color: currentColor, backgroundColor: getBackgroundWithOpacity(currentColor) }">{{
                        currentMeta }}</span>
                </transition>
            </p>

            <!-- class="italic" -->
            <div class="w-full flex flex-col items-center mb-2 mt-5">
                <img src="/assets/people/lab_first_day.jpg" alt="Lab Photo"
                     class="rounded-lg shadow-lg border border-gray-300 max-w-full h-auto"
                     style="max-width: 800px; max-height: 420px; width: 100%; object-fit: cover; margin-left: -50px;" />
            </div>

            <div class="w-full flex justify-center mb-0">
                <div style="background: rgba(255,255,255,0.85); padding: 6px 18px; border-radius: 8px; font-size: 1rem;
                    color: #374151; font-weight: 500; box-shadow: 0 2px 8px rgba(0,0,0,0.08); text-align: center;">
                    Our Team at Leyao Wang Lab
                </div>
            </div>
            
            <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-4 md:mt-6 lg:mt-5">
                In the <strong>Leyao Wang lab</strong>, we integrated microbiology, immunology, 
                and molecular biology with public health to understand how host-microbe 
                interactions impact human health.
            </p>
            <p class="text-sm md:text-base lg:text-lg text-gray-500 mt-2 md:mt-4 lg:mt-6">
                Our lab is part of the Institute of Human 
                Immunology at the <a href="https://smart.org.cn/en/">Shenzhen Medical Academy of Research and Translation (SMART)</a>,
                Shenzhen, China.

                Dr. Leyao Wang is a Principal Investigator at SMART.
            </p>
        </div>
        <!-- A div that when clicked brings you to the Research page -->
        <div class="text-center mt-8 md:mt-12 mb-2">
            <a href="/research/"
                class="no-underline text-gray-600 hover:text-gray-600 hover:shadow-md hover:shadow-custom-orange rounded-lg bg-custom-soft p-2 overflow-hidden transition-shadow duration-200 ease-in-out text-sm md:text-base lg:text-lg">Learn
                more about our research</a>
        </div>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
