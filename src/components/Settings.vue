<script setup lang="ts">
import { ref, onMounted } from "vue"

import MButton from "./ui/Button.vue"

let currentTheme = ref<string>("light")
onMounted((): void => {
    const localStorageTheme = localStorage.getItem("theme")
    currentTheme.value = localStorageTheme || "light"
})
</script>

<template>
    <div class="settings">
        <MButton data-toggle-theme="dark,light" data-act-class="ACTIVECLASS" text="Сменить тему" />
    </div>
</template>