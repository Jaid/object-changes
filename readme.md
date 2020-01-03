# object-changes


Compares two objects and returns the differences.

<a href="https://raw.githubusercontent.com/Jaid/object-changes/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/object-changes?style=flat-square&color=success" alt="License"/></a>  
<a href="https://github.com/Jaid/object-changes/commits"><img src="https://img.shields.io/github/commits-since/Jaid/object-changes/v0.1.0?style=flat-square&logo=github&color=success" alt="Commits since v0.1.0"/></a> <a href="https://github.com/Jaid/object-changes/commits"><img src="https://img.shields.io/github/last-commit/Jaid/object-changes?style=flat-square&logo=github&color=red" alt="Last commit"/></a> <a href="https://github.com/Jaid/object-changes/issues"><img src="https://img.shields.io/github/issues/Jaid/object-changes?style=flat-square&logo=github&color=red" alt="Issues"/></a>  
<a href="https://npmjs.com/package/object-changes"><img src="https://img.shields.io/npm/v/object-changes?style=flat-square&logo=npm&label=latest%20version&color=success" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/object-changes/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/object-changes?style=flat-square&logo=npm&color=red" alt="Dependents"/></a> <a href="https://npmjs.com/package/object-changes"><img src="https://img.shields.io/npm/dm/object-changes?style=flat-square&logo=npm&color=red" alt="Downloads"/></a>





## Usage

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



## Installation
<a href="https://npmjs.com/package/object-changes"><img src="https://img.shields.io/badge/npm-object--changes-C23039?style=flat-square&logo=npm" alt="object-changes on npm"/></a>
```bash
npm install --save object-changes@^0.1.0
```
<a href="https://yarnpkg.com/package/object-changes"><img src="https://img.shields.io/badge/Yarn-object--changes-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="object-changes on Yarn"/></a>
```bash
yarn add object-changes@^0.1.0
```
<a href="https://jsdelivr.com/package/npm/object-changes/"><img src="https://img.shields.io/badge/jsDelivr-object--changes-orange?style=flat-square&logo=html5&logoColor=white" alt="object-changes on jsDelivr"/></a> <a href="https://unpkg.com/browse/object-changes/"><img src="https://img.shields.io/badge/UNPKG-object--changes-orange?style=flat-square&logo=html5&logoColor=white" alt="object-changes on UNPKG"/></a>
```html
<script src="https://cdn.jsdelivr.net/npm/object-changes@0.1.0/index.js"/>
```


## Try it out



Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type", "text/javascript");
scriptElement.setAttribute("src", "https://cdn.jsdelivr.net/npm/object-changes@0.1.0/index.js");
document.querySelector("head").appendChild(scriptElement);
```

object-changes is now stored in the global variable `objectChanges`. The following console expression should return something other than `"undefined"`.

```javascript
typeof objectChanges.default
```

<a name="module_object-changes"></a>

## Reference
<a name="exp_module_object-changes--module.exports"></a>

### module.exports([compareValue]) ⇒ <code>Object</code> ⏏
**Kind**: Exported function  
**Returns**: <code>Object</code> - Seconds passed since Unix epoch (01 January 1970)  

| Param | Type |
| --- | --- |
| [compareValue] | <code>number</code> | 

**Example**  
```javascript
import objectChanges from "object-changes"
const result = objectChanges({
  unchanged: 2,
  changed: 2
},
{ unchanged: 2,
  changed: 3
})
// Result: {changed: 3}
```





## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
