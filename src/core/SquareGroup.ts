import { Square } from "./Square";
import { Shape, Point, rotateDiretion } from './types'

export class SquareGroup {
  private _group: ReadonlyArray<Square>

  constructor(private _shape: Shape, private _centerPoint: Point, private color: string) {
    this._group = _shape.map(item => {
      let x = item.x + _centerPoint.x
      let y = item.y + _centerPoint.y
      return new Square({ x, y }, color)
    })
  }

  private setSquarePoints() {
    this._shape.forEach((item, i) => {
      this._group[i].point = {
        x: item.x + this._centerPoint.x,
        y: item.y + this._centerPoint.y,
      }
    })
  }
  get centerPoint() {
    return this._centerPoint
  }
  set centerPoint(val) {
    this._centerPoint = val
    this.setSquarePoints()
  }
  get shape() {
    return this._shape
  }
  get group() {
    return this._group
  }

  afterRotateShape(direction: rotateDiretion = rotateDiretion.UP): Shape {
    let rotatedShape: Shape
    switch (direction) {
      case (rotateDiretion.UP):
        rotatedShape = this._shape.map(item => {
          return {
            x: -item.y,
            y: item.x
          }
        })
        break;
      case (rotateDiretion.DOWN):
        rotatedShape = this._shape.map(item => {
          return {
            x: item.y,
            y: -item.x
          }
        })
        break;
    }
    return rotatedShape
  }
  rotate() {
    let newShape: Shape = this.afterRotateShape()
    this._shape = newShape
    this.setSquarePoints()
  }
}