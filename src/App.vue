<template>
    <Container>
        <Plane />
        <Bullet />
    </Container>
</template>

<script setup lang="ts">
import Plane from './components/Plane.vue'
import Bullet from './components/Bullet.vue'
import { reactive } from 'vue'
import { initGame } from './game'

const plane = initGame(reactive({}), reactive([]))
</script>
