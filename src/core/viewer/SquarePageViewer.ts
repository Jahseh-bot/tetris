import { Iviewer } from "../types";
import { Square } from "../Square";
import pageConfig from "./pageConfig";
import $ from 'jquery'

export class SquarePageViewer implements Iviewer {
  private dom?: JQuery<HTMLElement>
  private isRemoved: boolean = false
  constructor(private square: Square, private container: JQuery<HTMLElement>) {

  }
  show(): void {
    if (!this.dom) {
      this.dom = $('<div>').css({
        position: 'absolute',
        width: pageConfig.squreSize.width,
        height: pageConfig.squreSize.height,
        border: '1px solid #ccc',
        boxSizing: 'border-box'
      }).appendTo(this.container)
    }
    this.dom.css({
      left: this.square.point.x * pageConfig.squreSize.width,
      top: this.square.point.y * pageConfig.squreSize.height,
      backgroundColor: this.square.color
    })
  }
  remove(): void {
    if (this.dom && !this.isRemoved) {
      this.dom.remove()
    }
  }
}