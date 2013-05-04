JSON to TREE
====

This project is a utility for configure a json and parse to ul/li tree.

JSON format
===
Sample of configure

```
[
  //Define a folder
  { "name": "Node Name",
    "type": "folder",
    "nodes":[
      //Define files or folder inside a folder
      {"type":"node","link":"http://www.google.com","name":"External link"},
      {"type":"node","link":"/test.html","name":"Internal link"},
      {"type":"node","link":"mailto:xxx@ooo.com","name":"mail link"},
      [
        "name": "Node Name",
        "type": "folder",
        "nodes":[
          ....
        ]
      ]
      ...
    ]
  },
  ...
]
```

Parse
===

```
var j2t = require('json2table');

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
```

Output:
```
<ul id="browser" class="filetree"><span style="font-size:+1">MiCloud Wiki</span><li><span class="folder">Level 1 Folder</span><ul> <li><span class="file"><a href="http://www.google.com">node1</a></span></li><li><span class="folder">Level 2 Folder</span><ul> <li><span class="file"><a href="http://www.google.com">node1.1</a></span></li><li><span class="file"><a href="http://www.google.com">node1.2</a></span></li></ul></li></ul></li></ul>
```
