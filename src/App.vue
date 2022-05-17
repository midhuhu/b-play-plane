<template>
    <Container>
        <EnemyPlane v-for='enemy in enemyPlanes' :enemy="enemy" />
        <Bullet v-for='bullet in bullets' :bullet="bullet" />
        <Plane :plane="plane" />
        <Nums />
    </Container>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { initGame } from './game'

import Plane from './components/Plane.vue'
import Bullet from './components/Bullet.vue'
import EnemyPlane from './components/EnemyPlane.vue';
import Nums from './components/nums.vue';


const { plane, bullets, enemyPlanes } = initGame(reactive({}), reactive([]), reactive([]));

</script>
