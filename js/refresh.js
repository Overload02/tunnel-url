function redirect(link) {
  var meta = document.createElement('meta');
  meta.httpEquiv = "Refresh";
  meta.context = "0; " + link;
  document.appendChild(meta);
}

var FALSE_LINK = location.href;
var URL = new URL(FALSE_LINK);
var PARAMS = new URLSearchParams(URL);
var TRUE_LINK = aPARAMS.get('_');