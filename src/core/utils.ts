export function getRandom(min: number, max: number): number {
  let dec = max - min
  return Math.floor(Math.random() * dec + min)
}