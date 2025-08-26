
<template>
    <div class="mx-auto max-w-4xl divide-y divide-gray-200">
        <div class="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 class="text-3xl leading-9 font-bold text-gray-800 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-center">
                Join Us
            </h1>
        </div>
        <div class="join-content pb-8">
            <Content />
        </div>
    </div>
</template>

<style>
.join-content p {
        font-size: 1rem;
        color: #6b7280;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
}
.join-content .join-welcome {
    font-size: 1.5rem;
    color: #374151;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
}
.join-content h2 {
        font-size: 2rem;
        color: #4b5563;
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        text-decoration: underline;
        font-weight: 600;
}

.join-content ul, .join-content ol {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
}
.join-content li {
    font-size: 1rem;
    color: #6b7280;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}
.join-content ol {
    list-style-type: decimal;
    padding-left: 1.5rem;
    font-size: 1.1rem;
    color: #374151;
}
</style>
