import { moveDirection, Point, rotateDiretion, Shape } from "./types";
import GameConfig from "./GameConfig";
import { SquareGroup } from "./SquareGroup";
import { generateTetris } from "./Tetris";


function isPoint(obj: any): obj is Point {
  return !(typeof obj.x === "undefined")
}

export class GameRules {
  static canIMove(shape: Shape, target: Point): boolean {
    const targetPoints: Point[] = shape.map(item => {
      return {
        x: target.x + item.x,
        y: target.y + item.y
      }
    })
    let res = targetPoints.some(item => item.x < 0 || item.y < 0 || item.x > GameConfig.gameSize.width - 1 || item.y > GameConfig.gameSize.height - 1)
    return !res
  }
  static move(group: SquareGroup, targetPos: Point): boolean;
  static move(group: SquareGroup, direction: moveDirection): boolean;
  static move(group: SquareGroup, targetPosOrDirection: Point | moveDirection): boolean {
    if (isPoint(targetPosOrDirection)) {
      if (this.canIMove(group.shape, targetPosOrDirection)) {
        group.centerPoint = {
          x: targetPosOrDirection.x,
          y: targetPosOrDirection.y
        }
        return true
      }
    } else {
      let targetPosition
      switch (targetPosOrDirection) {
        case moveDirection.LEFT:
          targetPosition = {
            x: group.centerPoint.x - 1,
            y: group.centerPoint.y
          }
          break;
        case moveDirection.RIGHT:
          targetPosition = {
            x: group.centerPoint.x + 1,
            y: group.centerPoint.y
          }
          break;
        case moveDirection.DOWN:
          targetPosition = {
            x: group.centerPoint.x,
            y: group.centerPoint.y + 1
          }
          break;
        case moveDirection.UP:
          targetPosition = {
            x: group.centerPoint.x,
            y: group.centerPoint.y - 1
          }
          break;
      }
      return this.move(group, targetPosition)
    }
    return false
  }

  static moveDirectly(group: SquareGroup, direction: moveDirection): void {
    while (this.move(group, direction)) {
    }
  }

}