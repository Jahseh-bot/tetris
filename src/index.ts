import { SquarePageViewer } from "./core/viewer/SquarePageViewer";
import { generateTetris } from "./core/Tetris";
import $ from "jquery"
import { GameRules } from "./core/GameRule";
import { moveDirection, rotateDiretion } from "./core/types";


let sqg = generateTetris({ x: 2, y: 2 })

sqg.group.map(item => {
  item.viewer = new SquarePageViewer(item, $('#app'))
})




$('#upBtn').click(() => {
  GameRules.move(sqg, moveDirection.UP)
})


$('#downBtn').click(() => {
  GameRules.moveDirectly(sqg, moveDirection.DOWN)
})


$('#leftBtn').click(() => {
  GameRules.move(sqg, moveDirection.LEFT)
})


$('#rightBtn').click(() => {
  GameRules.move(sqg, moveDirection.RIGHT)
})

$('#app').click(() => {
  sqg.rotate()
})