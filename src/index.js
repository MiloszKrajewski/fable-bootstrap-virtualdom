require("file?name=index.html!./html/index.html");

require("babel-polyfill");
require("bootstrap-webpack");

require("./css/style.styl");

var HelpersTS = require("HelpersTS");
var Main = require("Main");

require("HelpersES6").greet();
HelpersTS.greet();
Main.main();
