
import App from './App.vue'
import { game } from './game'
import { createApp } from './runtime-cavans'


const app = createApp(App)

app.mount(game.stage)