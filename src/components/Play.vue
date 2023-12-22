<script setup lang="ts">
import love from "@/assets/images/love.jpg"
import { ref, onMounted } from 'vue'

let canvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;

onMounted(function () {
    if (canvas.value != null) {
        ctx = canvas.value.getContext('2d');
    }
})

function play(event: any): void {
    const heartImg = new Image()
    heartImg.src = love

    const x = event.offsetX
    const y = event.offsetY
    const size = 50

    // Воспроизведение вибрации
    if (navigator.vibrate) {
        navigator.vibrate(100)
    }

    heartImg.onload = () => {
        if (ctx) {
            ctx.drawImage(heartImg, x - size / 2, y - size / 2, size, size)
        }
    };
}
</script>

<template>
    <div class="almond-container">
        <canvas ref="canvas" class="almond-canvas" @click="play"></canvas>
    </div>
</template>

<style lang="scss" scoped>
</style>