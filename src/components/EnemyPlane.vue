<template>
    <Container :x="enemy.x" :y="enemy.y">
        <Sprite :texture="emenyPlaneImg" />
    </Container>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import emenyPlaneImg from '../assets/enemyPlane.png'
import { EnemyPlane } from '../game';


defineProps({
    enemy: {
        type: Object as PropType<EnemyPlane>,
        required: true,
    },
})

</script>

<style lang="scss" scoped>
</style>