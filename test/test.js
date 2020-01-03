import fastDeepEqual from "fast-deep-equal"
import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: objectChanges} = indexModule

it("fast-deep-equal", () => {
  expect(fastDeepEqual("a", "a")).toBeTruthy()
  expect(fastDeepEqual({a: "b2"}, {a: `b${2}`})).toBeTruthy()
})

it("should run", () => {
  const previousObject = {
    name: "Goku",
    power: 7500,
  }
  const nextObject = {
    name: "Goku",
    power: 9001,
    over9000: true,
  }
  const expected = {
    over9000: true,
    power: 9001,
  }
  expect(objectChanges(previousObject, nextObject)).toStrictEqual(expected)
})