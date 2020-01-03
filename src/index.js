/** @module object-changes */

import fastDeepEqual from "fast-deep-equal"

/**
 * @function
 * @param {number} [compareValue]
 * @returns {Object} Seconds passed since Unix epoch (01 January 1970)
 * @example
 * import objectChanges from "object-changes"
 * const result = objectChanges({
 *   unchanged: 2,
 *   changed: 2
 * },
 * { unchanged: 2,
 *   changed: 3
 * })
 * // Result: {changed: 3}
 */
export default (previousObject, nextObject) => {
  const difference = {}
  for (const key of Object.keys(nextObject)) {
    if (key in previousObject && fastDeepEqual(previousObject[key], nextObject[key])) {
      continue
    }
    difference[key] = nextObject[key]
  }
  for (const key of Object.keys(previousObject)) {
    if (key in nextObject) {
      continue
    }
    difference[key] = undefined
  }
  return difference
}