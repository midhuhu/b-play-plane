export class EnemyPlane {
    public x: number = 0;
    public y: number = 0;
    public speed: number = 5;
    constructor() {

    }
    move() {
        this.y += this.speed
    }
}

export function initEnemyPlanes(enemyPlanes: EnemyPlane[]) {
    const enemy = new EnemyPlane()
    enemyPlanes.push(enemy)
}

export function runEnemyPlanes(enemyplanes: EnemyPlane[]) {
    enemyplanes.forEach(enemy => {
        enemy.move()
    })
}
