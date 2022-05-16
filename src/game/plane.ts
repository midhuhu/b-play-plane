export interface Plane {
    x: number;
    y: number;
    moveDown: () => void;
    moveUp: () => void;
    moveLeft: () => void;
    moveRight: () => void;
}

const defaultOptions = {
    x: 180,
    y: 660,
    speed: 10
}
export function setupPlane(plane: any, options?: any): Plane {
    Object.assign(plane, defaultOptions, options)
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

    return plane
}