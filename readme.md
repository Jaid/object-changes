# object-changes


<a href="https://raw.githubusercontent.com/Jaid/object-changes/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/object-changes?style=flat-square" alt="License"/></a>  
<a href="https://actions-badge.atrox.dev/Jaid/object-changes/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2FJaid%2Fobject-changes%2Fbadge" alt="Build status"/></a> <a href="https://github.com/Jaid/object-changes/commits"><img src="https://img.shields.io/github/commits-since/Jaid/object-changes/v1.0.0?style=flat-square&logo=github" alt="Commits since v1.0.0"/></a> <a href="https://github.com/Jaid/object-changes/commits"><img src="https://img.shields.io/github/last-commit/Jaid/object-changes?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/Jaid/object-changes/issues"><img src="https://img.shields.io/github/issues/Jaid/object-changes?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/object-changes"><img src="https://img.shields.io/npm/v/object-changes?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/object-changes/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/object-changes?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/object-changes"><img src="https://img.shields.io/npm/dm/object-changes?style=flat-square&logo=npm" alt="Downloads"/></a>

**Compares two objects and returns the differences.**









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
npm install --save object-changes@^1.0.0
```
<a href="https://yarnpkg.com/package/object-changes"><img src="https://img.shields.io/badge/Yarn-object--changes-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="object-changes on Yarn"/></a>
```bash
yarn add object-changes@^1.0.0
```
<a href="https://jsdelivr.com/package/npm/object-changes/"><img src="https://img.shields.io/badge/jsDelivr-object--changes-orange?style=flat-square&logo=html5&logoColor=white" alt="object-changes on jsDelivr"/></a> <a href="https://unpkg.com/browse/object-changes/"><img src="https://img.shields.io/badge/UNPKG-object--changes-orange?style=flat-square&logo=html5&logoColor=white" alt="object-changes on UNPKG"/></a>
```html
<script src="https://cdn.jsdelivr.net/npm/object-changes@1.0.0/index.js"/>
```








## Development



Setting up:
```bash
git clone git@github.com:Jaid/object-changes.git
cd object-changes
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

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
