# Example Api-pug

- Pug documentation https://github.com/pugjs/pug
- Api pug https://pugjs.org/api/getting-started.html
- Node-glob https://github.com/isaacs/node-glob

- Este ejemplo fue probado con la versión <b>"pug": "^2.0.0-beta2"</b>, ya que la versión <b>"pug": "^0.1.0"</b> no me permitía hacer uso de los <i>include</i>

```javascript
var pug = require('pug');
var fs = require('fs');
var glob = require("glob");
var pattern = __dirname + "/frontend/pug/*.pug";
var src = __dirname + "/src/html/";

var filesInput = glob.sync(pattern);

// Compile the source code
filesInput.forEach(function(element, index) {
    var path = element.split("/").pop();
    var name = path.replace('pug', 'html');

    var compiledFunction = pug.compileFile(element, {
      filename : 'pug',
      doctype: 'html',
      pretty: true,
      inlineRuntimeFunctions: true
    });

    var html = compiledFunction();
    fs.writeFileSync(src.concat(name), html, 'utf-8');
});
```

package.json
```javascript
"scripts": {
    "pug": "node ./pugDemo.js",
    "watch": "pug -w ./frontend/pug/*.pug --pretty --out  './src/html'"
 },
```
