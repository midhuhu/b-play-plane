export class EnemyPlane {
    public x: number = 180;
    public y: number = 0;
    public speed: number = 5;
    public width: number = 125;
    public height: number = 125;
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
