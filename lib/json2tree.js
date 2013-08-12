var fs = require('fs')
  , util = require('util')

var ul2 = '<li><span class="folder">%s</span><ul> %s</ul></li>';
var li = '<li><span class="file"><a href="%s">%s</a></span></li>';

function getHtml(json, opts) {
  var this_line = '';
  if(json['type'] == 'folder') {
    var tmp = '';
    for(var j = 0 ; j < json['nodes'].length ; j ++) {
      if(opts)
        tmp = tmp + getHtml(json['nodes'][j], opts); 
      else
        tmp = tmp + getHtml(json['nodes'][j]); 
    }
    this_line = util.format(ul2, json['name'], tmp);
    return this_line;
  } else {
    // if(opts && opts.fn) 
    //   json.link = opts.fn(json.link);
    if(opts) {
      if(opts.fn) 
        this_line = util.format(li, 
          opts.fn(json.link), 
          json.name);
      else if(opts.linkPattern)
        this_line = util.format(li, 
          util.format(opts.linkPattern, json.link), 
          json.name);
    } else {
      this_line = util.format(li, json.link, json.name);
    }
    return this_line;
  }
  return html;
}

exports.toUlTree = function(data, opts) {
  var html = '<ul id="browser" class="filetree"><span style="font-size:+1"></span>';
  for(var j = 0 ; j < data.length ; j ++) {
    if(opts)
      html += getHtml(data[j], opts);
    else
      html += getHtml(data[j]);
  }
  html += '</ul>';
  return html;
}

