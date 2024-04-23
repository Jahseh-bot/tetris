export interface Point {
  readonly x: number
  readonly y: number
}

export interface Iviewer {
  show(): void
  remove(): void
}

export type Shape = Point[]

export enum moveDirection {
  LEFT,
  RIGHT,
  UP,
  DOWN
}

export enum rotateDiretion {
  UP,
  DOWN
}