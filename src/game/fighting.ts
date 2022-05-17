import { EnemyPlane } from "./EnemyPlane";
import { hitTestObiect } from "./hitTestObiect";
import { Plane } from "./Plane";

export function fighting(plane: Plane, enemyPlanes: EnemyPlane[]) {
    plane.bullets.forEach((bullet, bIndex) => {
        enemyPlanes.forEach((enemy, eIndex) => {
            if (hitTestObiect(bullet, enemy)) {
                enemyPlanes.splice(eIndex, 1)
                plane.bullets.splice(bIndex, 1)
            }
        })
    })
}

