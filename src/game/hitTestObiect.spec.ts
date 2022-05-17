import { expect, describe, it } from 'vitest'
import { hitTestObiect } from './hitTestObiect'

describe('HitTestObject', () => {
    it('true', () => {
        const rectA = {
            x: 0,
            y: 0,
            width: 25,
            height: 25
        }
        const rectB = {
            x: 0,
            y: 0,
            width: 25,
            height: 25
        }
        expect(hitTestObiect(rectA, rectB)).toBe(true)
    })

    it('false', () => {
        const rectA = {
            x: 0,
            y: 0,
            width: 25,
            height: 25
        }
        const rectB = {
            x: 50,
            y: 0,
            width: 25,
            height: 25
        }
        expect(hitTestObiect(rectA, rectB)).toBe(false)
    })
})