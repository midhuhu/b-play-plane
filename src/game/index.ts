import { Application } from 'pixi.js'
import bullet from './bullet'
import { Plane, setupPlane } from './plane'
export * from './plane'

export const game = new Application({
    width: 500,
    height: 900
})

document.body.append(game.view)

export const initGame = (_plane: {}, bullets: bullet[] | undefined) => {
    const plane = setupPlane(_plane, bullets, {})
    mainTicker(plane)
    return {
        plane,
        bullets
    }
}
function mainTicker(plane: Plane) {
    game.ticker.add(() => {
        plane.run()
    })
}
