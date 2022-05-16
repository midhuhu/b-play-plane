<template>
    <Container :x="plane.x" :y="plane.y">
        <Sprite :texture="planeImg" />
    </Container>
</template>

<script setup lang="ts">
import planeImg from '../assets/plane.png'

import { reactive } from 'vue';
import { setupPlane } from '../game';

const plane = setupPlane(reactive({}))

window.addEventListener('keydown', e => {
    switch (e.code) {
        case "ArrowLeft":
            plane.moveLeft();
            break
        case "ArrowRight":
            plane.moveRight();
            break
        case "ArrowUp":
            plane.moveUp();
            break
        case "ArrowDown":
            plane.moveDown();
            break
        default:
            break
    }
})

</script>

<style lang="scss" scoped>
</style>