export class EnemyPlane {
    public x: number = 180;
    public y: number = 0;
    public speed: number = 1;
    public width: number = 80;
    public height: number = 80;
    constructor() {

    }
    move() {
        this.y += this.speed
    }
}

export function initEnemyPlanes(enemyPlanes: EnemyPlane[]) {
    setInterval(() => {
        const enemy = new EnemyPlane()
        enemy.x = Math.random() * 400
        enemy.y = -10
        enemyPlanes.push(enemy)
    }, 1000)
}

export function runEnemyPlanes(enemyplanes: EnemyPlane[]) {
    enemyplanes.forEach(enemy => {
        enemy.move()
    })
}
