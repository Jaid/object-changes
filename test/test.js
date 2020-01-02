import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: objectChanges} = indexModule

it("should run", () => {
  const result = objectChanges()
  expect(result).toBeGreaterThan(1549410770)
})