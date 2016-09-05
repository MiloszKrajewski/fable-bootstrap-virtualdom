require("babel-polyfill");
require("whatwg-fetch");
require("bootstrap-webpack");

require("file?name=index.html!./html/index.html");
require("file?name=favicon.png!./img/favicon.png");
require("./css/style.styl");

require("Main").main();
