<script>
export default {
    props: {
        icon: String,
        link: String,
    },
    data() {
        return {
            showNotification: false
        };
    },
    computed: {
        svg() {
            return `<span class="i-social-${this.icon}" />`;
        },
    },
    methods: {
        async handleClick() {
            if (this.icon === 'email') {
                const ok = await this.copyEmail();
                if (ok) {
                    this.showNotification = true;
                    setTimeout(() => {
                        this.showNotification = false;
                    }, 1000);
                } else {
                    console.error('Failed to copy email');
                }
            } else {
                window.open(this.link, '_blank', 'noopener');
            }
        },
        async copyEmail() {
            // 首选异步 Clipboard API（需要 HTTPS 或 localhost）
            if (navigator.clipboard && window.isSecureContext) {
                try {
                    await navigator.clipboard.writeText(this.link);
                    return true;
                } catch (err) {
                    console.error('Clipboard API failed:', err);
                }
            }
            // 回退方案：兼容非安全上下文（HTTP）或旧浏览器
            try {
                const textarea = document.createElement('textarea');
                textarea.value = this.link;
                textarea.setAttribute('readonly', '');
                textarea.style.position = 'fixed';
                textarea.style.top = '-9999px';
                document.body.appendChild(textarea);
                textarea.select();
                const ok = document.execCommand('copy');
                document.body.removeChild(textarea);
                return ok;
            } catch (err) {
                console.error('Copy fallback failed:', err);
                return false;
            }
        },
    }
}
</script>

<template>
    <transition name="fade">
        <div v-if="showNotification"
            class="fixed top-2 left-1/2 transform -translate-x-1/2 border-2 border-custom-orange bg-white text-custom-orange text-center py-2 px-4 rounded-lg z-50">
            Email address copied to clipboard!
        </div>
    </transition>
    <div @click.stop="handleClick"
        class="flex justify-center items-center w-9 h-9 text-gray-600 transition-color duration-500 hover:text-custom-orange hover:duration-300"
        v-html="svg">
    </div>
</template>

<style>
/* Fade transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>