```js
import objectChanges from "object-changes"#
const previousObject = {
  unchanged: 2,
  changed: 2,
  removed: "a"
}
const nextObject = {
  unchanged: 2,
  changed: 3
}
const result = objectChanges(previousObject, nextObject)
// Result: {changed: 3, removed: undefined}
```