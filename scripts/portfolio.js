
hexo.extend.tag.register('image', function(args) {
  url = args[0]
  alt = args[1]
  caption = args[2]
  text = '<div class="row">'
  text += '<a href="' + url + '">'
  text += '<img class="u-max-full-width center" src="' + url + '" alt="' + alt + '" />'
  text += '</a>'
  text += '</div>'
  if (caption) {
    text += '<p class="caption">' + caption + '</p>'
  }
  return text
});

hexo.extend.tag.register('youtube', function(args) {
  url = args[0]
  alt = args[1]
  id = args[2]
  caption = args[3]
  text = '<div class="row">'
  text += '<div class="youtube">'
  text += '<img src="' + url + '" alt="' + alt + '" />'
  text += '<div class="play" onclick="embedPlayer(this, \'' + id + '\')" />'
  text += '</div>'
  text += '</div>'
  if (caption) {
    text += '<p class="caption">' + caption + '</p>'
  }
  return text
});


hexo.extend.helper.register('teaser_image_path', function(item) {
  return item.path + item.path.replace(/\/$/, "") + '.jpg';
});
