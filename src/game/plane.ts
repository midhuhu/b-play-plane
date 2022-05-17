import { Bullet } from "./Bullet";
import { EnemyPlane } from "./EnemyPlane";

export interface Plane {
    x: number;
    y: number;
    speed: number;
    bullets: [],
    moveDown: () => void;
    moveUp: () => void;
    moveLeft: () => void;
    moveRight: () => void;
    attack: () => void;
    run: () => void;
}
const defaultOptions = {
    x: 180,
    y: 660,
    speed: 10
}
// plane move
function initMove(plane: Plane) {
    plane.moveDown = function moveDown() {
        plane.y += plane.speed
    }
    plane.moveUp = function moveUp() {
        plane.y -= plane.speed
    }
    plane.moveLeft = function moveLeft() {
        plane.x -= plane.speed
    }
    plane.moveRight = function moveRight() {
        plane.x += plane.speed
    }
}
// bullet move
function initRun(plane: Plane, bullets: Bullet[]) {
    plane.run = () => {
        bullets.forEach(bullet => {
            bullet.move()
        })
    }
}
// bullet attack
function initAttack(plane: Plane, bullets: Bullet[]) {
    plane.attack = () => {
        const bullet = new Bullet()
        // change bullet position
        bullet.x = plane.x + 51
        bullet.y = plane.y - 20
        // remove bullet when out of border
        bullet.border = 5
        bullet.onDestory = () => {
            bullets.splice(bullets.indexOf(bullet), 1)
        }
        bullets.push(bullet)
    }
}
// plane init
export function setupPlane(plane: any, bullets: Bullet[], options?: {}): Plane {
    plane.bullets = bullets
    Object.assign(plane, defaultOptions, options)

    initMove(plane)
    initRun(plane, bullets)
    initAttack(plane, bullets)

    return plane
}

