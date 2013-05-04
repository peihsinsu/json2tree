var fs = require('fs')
  , util = require('util')
  , nu = require('nodeutil')
  //, log = nu.logger.getInstance();

var ul2 = '<li><span class="folder">%s</span><ul> %s</ul></li>';
var li = '<li><span class="file"><a href="%s">%s</a></span></li>';

function getHtml(json) {
  var this_line = '';
  if(json['type'] == 'folder') {
    var tmp = '';
    for(var j = 0 ; j < json['nodes'].length ; j ++) {
      tmp = tmp + getHtml(json['nodes'][j]); 
    }
    this_line = util.format(ul2, json['name'], tmp);
    return this_line;
  } else {
    if(json.link.endsWith('.md'))
      this_line = util.format(li, 'index.html?page='+json.link, json.name);
    else
      this_line = util.format(li, json.link, json.name);
    return this_line;
  }
  return html;
}

exports.toUlTree = function(data) {
  var html = '<ul id="browser" class="filetree"><span style="font-size:+1">MiCloud Wiki</span>';
  for(var j = 0 ; j < data.length ; j ++) {
    html += getHtml(data[j]);
  }
  html += '</ul>';
  return html;
}

