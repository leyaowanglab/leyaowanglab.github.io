<script setup>
import { useData } from 'vitepress'

const pictureModules = import.meta.glob(
    "/pictures/*.{jpg,jpeg,png,gif,webp,svg,avif}",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

const pictures = Object.entries(pictureModules)
    .map(([path, src]) => {
        const name = path.split("/").pop();
        return { name, src };
    })
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

const { frontmatter } = useData();

function captionFor(picture) {
    const captions = frontmatter.value?.captions || {};
    return captions[picture.name] || "";
}
</script>

<template>
    <div>
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1
                class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Leyao Wang Lab Pictures
            </h1>
            <p class="text-lg leading-7 text-gray-600">
                Photos from the lab.
            </p>
        </div>
        <div v-if="pictures.length" class="grid grid-cols-2 gap-x-8 gap-y-12">
            <figure v-for="picture in pictures" :key="picture.src" class="m-0">
                <img :src="picture.src" :alt="captionFor(picture) || picture.name"
                    class="w-full h-auto rounded-lg shadow-md" loading="lazy" />
                <figcaption v-if="captionFor(picture)" class="mt-3 text-center text-sm leading-relaxed text-gray-600">
                    {{ captionFor(picture) }}
                </figcaption>
            </figure>
        </div>
        <p v-else class="text-lg text-gray-500">
            No pictures yet.
        </p>
    </div>
</template>
