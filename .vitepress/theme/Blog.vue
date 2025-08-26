<script>
import Date from './components/Date.vue'
import { data as posts } from './posts.data.js'
import { useData } from 'vitepress'

function extractPreviewImage(post) {
    // Use frontmatter image if available
    if (post.image) return post.image;
    const excerpt = post.excerpt;
    if (!excerpt) return null;
    // Try HTML <img> first
    let match = excerpt.match(/<img[^>]*src=["']([^"']+)["'][^>]*>/);
    if (match) return match[1];
    // Try markdown image ![alt](src)
    match = excerpt.match(/!\[[^\]]*\]\(([^\)]+)\)/);
    if (match) return match[1];
    return null;
}

export default {
    components: {
        Date
    },
    data() {
        return {
            posts: posts.filter(post => post.url.endsWith('.html')).map(post => ({
                ...post,
                previewImage: extractPreviewImage(post)
            })),
            frontmatter: useData().frontmatter
        };
    }
}
</script>

<template>
    <div class="divide-y divide-gray-200">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1
                class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Leyao Wang Lab Blog/News
            </h1>
            <p class="text-lg leading-7 text-gray-600">
                A collection of thoughts, ideas, and projects from the Leyao Wang Lab team.
            </p>
        </div>
        <ul class="divide-y divide-gray-200">
            <li class="py-12" v-for="post in posts" :key="post.url">
                <article class="py-4 flex flex-row xl:items-baseline">
                    <div class="flex flex-col items-center mr-8" style="min-width: 120px;">
                        <Date :date="post.date" />
                        <div v-if="post.previewImage" class="mt-2">
                            <img
                                :src="post.previewImage"
                                alt="Blog preview image"
                                class="rounded-lg shadow-md"
                                style="width: 120px; height: auto; max-width: 120px; display: block;"
                            />
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col justify-between">
                        <h2 class="text-2xl leading-8 font-bold tracking-tight mb-2">
                            <a class="text-gray-900 hover:text-gray-900 no-underline" :href="post.url">{{ post.title }}</a>
                        </h2>
                        <div v-if="post.excerpt" class="max-w-none text-gray-500 mb-2" v-html="post.excerpt"></div>
                        <div class="text-base leading-6 font-medium">
                            <a class="text-custom-orange no-underline" aria-label="read more about {{ post.title }}"
                                :href="post.url">Read more
                                →</a>
                        </div>
                    </div>
                </article>
            </li>
        </ul>
    </div>
</template>