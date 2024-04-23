import { SquareGroup } from "./SquareGroup";
import { Point, Shape } from "./types";
import { getRandom } from "./utils";

export const TShape: Shape = [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }]

export const LShape: Shape = [{ x: -2, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }]

export const LMirrorShape: Shape = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }]

export const ZShape: Shape = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: -1, y: -1 }]

export const ZMirrorShape: Shape = [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }]

export const SquareShape: Shape = [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }]

export const LineShape: Shape = [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }]

export const shapes = [TShape, LShape, LMirrorShape, ZShape, ZMirrorShape, SquareShape, LineShape]

export function generateTetris(centerPoint: Point) {
  let randomColor = `rgba(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)},1)`
  let randomShape = shapes[getRandom(0, shapes.length)]
  return new SquareGroup(randomShape, centerPoint, randomColor)
}