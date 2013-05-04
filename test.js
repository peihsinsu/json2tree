var j2t = require('./lib/json2tree');

var out = j2t.toUlTree(
  [
    { "name": "MiCloud資訊",
      "type": "folder",
      "nodes":[
        {"type":"node","link":"http://micloud.tw.html","name":"MiCloud官方網站"},
        {"type":"node","link":"http://micloud.tw/ch/price/price.html","name":"MiCloud產品規格"},
        {"type":"node","link":"mailto:service@micloud.tw.html","name":"MiCloud服務信箱"}
      ]
    }
  ]
);

console.log(out);
