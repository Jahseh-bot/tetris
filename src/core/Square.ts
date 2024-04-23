import { Point } from "./types"
import { Iviewer } from "./types"

export class Square {
  private _viewer?: Iviewer

  constructor(private _point: Point, private _color: string) {

  }

  get point() {
    return this._point
  }
  set point(val: Point) {
    this._point = val
    if (this._viewer) {
      this._viewer.show()
    }
  }

  get color() {
    return this._color
  }

  get viewer() {
    return this._viewer
  }
  set viewer(val) {
    this._viewer = val
    if(val) {
      val.show()
    }
  }
}