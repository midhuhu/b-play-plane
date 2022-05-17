import { expect, it, describe, vi } from 'vitest'
import { EnemyPlane, initEnemyPlanes, runEnemyPlanes } from './EnemyPlane'

describe('EnemyPlane', () => {
    it('move', () => {
        const enemy = new EnemyPlane()
        enemy.y = 0
        enemy.speed = 5
        enemy.move()
        expect(enemy.y).toBe(5)
    })

    it('initEnemyPlanes', () => {
        vi.useFakeTimers()
        const enemyPlanes: EnemyPlane[] = []
        initEnemyPlanes(enemyPlanes)
        // 1000ms later
        vi.advanceTimersByTime(2000)
        expect(enemyPlanes.length).toBe(2)
        vi.resetAllMocks()
    })
    it('runEnemyPlanes', () => {
        const enemy = new EnemyPlane()
        enemy.y = 1
        enemy.speed = 1
        const enemyPlanes = [enemy]
        runEnemyPlanes(enemyPlanes)
        expect(enemy.y).toBe(2)
    })
})
