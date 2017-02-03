function embedPlayer(node, id) {
    var iframe = document.createElement("iframe");
    var url = window.location.protocol + "//www.youtube.com/embed/" + id + "?autoplay=1&autohide=1&rel=0&controls=2";
    iframe.setAttribute("src", url);
    iframe.setAttribute("frameborder",'0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.className = "player";
    node.parentNode.replaceChild(iframe, node);
}
