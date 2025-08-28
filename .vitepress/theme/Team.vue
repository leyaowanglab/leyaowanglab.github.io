<script>
import { data as people } from './people.data.js';
import { alumni } from '../../people/alumni.js';
import TeamMembers from './components/TeamMembers.vue';

export default {
    components: {
        TeamMembers
    },
    data() {
        const categorizedData = this.categorizeMembers(people);
        const alumniByCategory = this.categorizeAlumni(alumni);
        let categories = Object.keys(categorizedData);
        // Move 'Principal Investigator' to the top if it exists
        categories = categories.filter(c => c !== 'Principal Investigator');
        categories.unshift('Principal Investigator');
        return {
            categories,
            membersByCategory: categorizedData,
            alumniCategories: alumniByCategory
        };
    },
    methods: {
        categorizeMembers(people) {
            return people
                .filter(person => person.url.endsWith('.html'))
                .reduce((acc, person) => {
                    if (!acc[person.category]) {
                        acc[person.category] = [];
                    }
                    acc[person.category].push(person);
                    return acc;
                }, {});
        },
        categorizeAlumni(alumni) {
            const titles = ["Postdoc", "Graduate Student", "Staff Member", "Undergraduate Researcher", "Visiting Student"];
            const alumniCategories = {};
            titles.forEach(title => {
                alumniCategories[title] = alumni.filter(a => a.title === title);
            });
            return alumniCategories;
        },
        groupAlumniByLab(alumniList) {
            if (!alumniList) return {};
            const grouped = {};
            alumniList.forEach(alum => {
                const lab = alum.lab || "Other";
                if (!grouped[lab]) grouped[lab] = [];
                grouped[lab].push(alum);
            });
            return grouped;
        }

    }
}
</script>

<template>
    <div>
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1
                class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Meet the Team
            </h1>
        </div>
        <div class="w-full border-t border-gray-200"></div>
        <div v-for="category in categories" :key="category" class="category-section my-6">
            <div class="pt-6 pb-8 space-y-2 md:space-y-5">
                <h1
                    class="text-xl leading-9 font-bold text-gray-800 tracking-tight text-center md:text-left sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                    {{ category }}
                </h1>
            </div>
            <TeamMembers :members="membersByCategory[category]"
                v-if="membersByCategory[category] && membersByCategory[category].length"></TeamMembers>
        </div>
    </div>
    <h1
        class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 border-t border-gray-200 pt-10">
        Alumni
    </h1>
        <div v-for="title in ['Postdoc', 'Graduate Student', 'Staff Member', 'Undergraduate Researcher', 'Visiting Student']" :key="title">
            <div class="alumni-section my-6">
                <div class="pt-6 pb-8 space-y-2 md:space-y-5">
                    <h1
                        class="text-lg leading-9 font-bold text-gray-800 tracking-tight text-center md:text-left sm:text-2xl sm:leading-10 md:text-4xl md:leading-14">
                        {{ title }}s
                    </h1>
                </div>
                <div v-for="(alumniByLab, lab) in groupAlumniByLab(alumniCategories[title])" :key="lab" class="mb-4">
                    <div v-if="lab" class="text-xs text-gray-400 mb-2">{{ lab }}</div>
                    <div v-for="alum in alumniByLab" :key="alum.name" class="ml-4">
                        <div class="font-bold">{{ alum.name }}</div>
                        <div v-if="alum.start || alum.end" class="text-gray-500">
                            <span v-if="alum.start">{{ alum.start }}</span>
                            <span v-if="alum.start && alum.end"> - </span>
                            <span v-if="alum.end">{{ alum.end }}</span>
                        </div>
                        <div v-if="alum.position" class="text-gray-600">{{ alum.position }}</div>
                        <div v-else-if="alum.currentPosition" v-html="alum.currentPosition"></div>
                    </div>
                </div>
            </div>
        </div>
</template>
