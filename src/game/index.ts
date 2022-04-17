import { Application } from 'pixi.js'


export const game = new Application({
    width: 500,
    height: 900
})

document.body.append(game.view)