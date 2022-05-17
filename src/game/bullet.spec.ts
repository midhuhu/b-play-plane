import { expect, it, describe, vi } from 'vitest'
import Bullet from './bullet'

describe('Bullet', () => {
    it('move', () => {
        const bullet = new Bullet()
        bullet.speed = 5
        bullet.move()
        expect(bullet.y).toBe(-5)
    })

    it('子弹超出边界回调 onDestory', () => {
        const bullet = new Bullet()
        bullet.y = 1
        bullet.x = 0
        bullet.speed = 1
        bullet.border = 0
        bullet.onDestory = vi.fn()
        bullet.move()
        expect(bullet.onDestory).toBeCalled()
    })

})