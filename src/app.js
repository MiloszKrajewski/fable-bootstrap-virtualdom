require("babel-polyfill");
require("bootstrap-webpack");

require("./style.styl")

var HelpersTS = require("HelpersTS");
var Main = require("Main");

require("HelpersES6").greet();
HelpersTS.greet();
Main.main();

