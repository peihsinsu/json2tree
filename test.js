var j2t = require('./lib/json2tree');

var out = j2t.toUlTree(
  [
    { "name": "Level 1 Folder",
      "type": "folder",
      "nodes":[
        {"type":"node","link":"http://www.google.com","name":"node1"},
        {
          "name": "Level 2 Folder",
          "type": "folder",
          "nodes":[
            {"type":"node","link":"http://www.google.com","name":"node1.1"},
            {"type":"node","link":"http://www.google.com","name":"node1.2"}
          ]
        }
      ]
    }
  ]
);

console.log(out);
