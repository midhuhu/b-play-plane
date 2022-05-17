<template>
    <Container :x="plane.x" :y="plane.y">
        <Sprite :texture="planeImg" />
    </Container>
</template>

<script setup lang="ts">
import planeImg from '../assets/plane.png'
import { PropType } from 'vue';
import { Plane } from '../game';

const { plane } = defineProps({
    plane: {
        type: Object as PropType<Plane>,
        required: true,
    },
})

window.addEventListener('keydown', e => {
    if (e.code === "Space") {
        plane.attack();
    }
    switch (e.code) {
        case "KeyA":
            plane.moveLeft();
            break
        case "KeyD":
            plane.moveRight();
            break
        case "KeyW":
            plane.moveUp();
            break
        case "KeyS":
            plane.moveDown();
            break
        default:
            break
    }
})

</script>

<style lang="scss" scoped>
</style>