export function resizeMapAreas(id, width) {
  // код, который делает так, чтобы map ресайзился когда меняется размер изображения
  var ImageMap = function (map) {
    var n,
      areas = map.getElementsByTagName("area"),
      len = areas.length,
      coords = [],
      previousWidth = width;
    for (n = 0; n < len; n++) {
      coords[n] = areas[n].coords.split(",");
    }
    this.resize = function () {
      var n,
        m,
        clen,
        x = document.body.clientWidth / previousWidth;
      for (n = 0; n < len; n++) {
        clen = coords[n].length;
        for (m = 0; m < clen; m++) {
          coords[n][m] *= x;
        }
        areas[n].coords = coords[n].join(",");
      }
      previousWidth = document.body.clientWidth;
      return true;
    };
    window.onresize = this.resize;
  };
  if (document.getElementById(id)) {
    let imageMap = new ImageMap(document.getElementById(id));
    imageMap.resize();
  }
}
