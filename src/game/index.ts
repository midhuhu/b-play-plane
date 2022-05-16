import { Application } from 'pixi.js'
import { setupPlane } from './plane'
export * from './plane'

export const game = new Application({
    width: 500,
    height: 900
})

export const initGame = (_plane: any, bullets: any) => {
    const plane = setupPlane(_plane, bullets)
    return plane
}

document.body.append(game.view)