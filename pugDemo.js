/*
 *@module (pug)
 *@author Kathia Neira
 */

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
    compileDebug: true,
    filename: 'pug',
    doctype: 'html',
    pretty: true,
    inlineRuntimeFunctions: true
  });
  var html = compiledFunction();
  fs.writeFileSync(src.concat(name), html, 'utf-8');
});
