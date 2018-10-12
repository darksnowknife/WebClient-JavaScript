var BaiduCRS = new L.Proj.CRS(
'EPSG:3395',
'+proj=merc +lon_0=0 +k=1 +x_0=140 +y_0=-250 +datum=WGS84 +units=m +no_defs', {
  resolutions: function () {
    level = 19;
    var res = [];
    res[0] = Math.pow(2, 18);
    for (var i = 1; i < level; i++) {
      res[i] = Math.pow(2, (18 - i))
    }
    return res;
  }(),
  origin: [0, 0],
  bounds: L.bounds([20037508.342789244, 0], [0, 20037508.342789244])
}
);

var light = L.zondy.BaiduTileLayer({
styles: 'light',
baidukey: '5ssIAkexwFSGMatjOF95gg3sjet3yxQ1'
});
var dark = L.zondy.BaiduTileLayer({
styles: 'dark',
baidukey: '5ssIAkexwFSGMatjOF95gg3sjet3yxQ1'
});
var visualization = L.zondy.BaiduTileLayer({
styles: 'visualization',
baidukey: '5ssIAkexwFSGMatjOF95gg3sjet3yxQ1'
});
var redalert = L.zondy.BaiduTileLayer({
styles: 'redalert',
baidukey: '5ssIAkexwFSGMatjOF95gg3sjet3yxQ1'
});
var grassgreen = L.zondy.BaiduTileLayer({
styles: 'grassgreen',
baidukey: '5ssIAkexwFSGMatjOF95gg3sjet3yxQ1'
});
var pink = L.zondy.BaiduTileLayer({
styles: 'pink',
baidukey: '5ssIAkexwFSGMatjOF95gg3sjet3yxQ1'
});
var bluish = L.zondy.BaiduTileLayer({
styles: 'bluish',
baidukey: '5ssIAkexwFSGMatjOF95gg3sjet3yxQ1'
});
var darkgreen = L.zondy.BaiduTileLayer({
styles: 'darkgreen',
baidukey: '5ssIAkexwFSGMatjOF95gg3sjet3yxQ1'
});
var grayscale = L.zondy.BaiduTileLayer({
styles: 'grayscale',
baidukey: '5ssIAkexwFSGMatjOF95gg3sjet3yxQ1'
});
var hardedge = L.zondy.BaiduTileLayer({
styles: 'hardedge',
baidukey: '5ssIAkexwFSGMatjOF95gg3sjet3yxQ1'
});
var midnight = L.zondy.BaiduTileLayer({
styles: 'midnight',
baidukey: '5ssIAkexwFSGMatjOF95gg3sjet3yxQ1'
});
var pl = L.zondy.BaiduTileLayer({
styles: 'pl',
baidukey: '5ssIAkexwFSGMatjOF95gg3sjet3yxQ1'
});
//各种风格图层加载
var baseMaps = {
  '默认': visualization,
  '白色风格': light,
  '黑夜风格': dark,
  '红色警戒风格': redalert,
  '自然绿风格': grassgreen,
  '浪漫粉风格': pink,
  '清新蓝风格': bluish,
  '青春绿风格': darkgreen,
  '高端灰风格': grayscale,
  '强边界风格': hardedge,
  '午夜蓝风格': midnight,
  '无风格': pl
};