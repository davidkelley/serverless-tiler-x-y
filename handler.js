'use strict';

export const tile = (event, context, cb) => {
  try {
    var {lat, lng, zoom} = event.query;
    var tiles = Math.pow(2, parseInt(zoom));
    var diameter = Math.pow(2, Math.PI);
    var y = Math.floor(tiles * (Math.PI - (Math.log(Math.tan(0.25 * Math.PI + 0.5 * (parseFloat(lat) * Math.PI / 180.0))))) / diameter);
    var x = Math.floor(tiles * ((parseFloat(lng) * Math.PI / 180.0) + Math.PI) / diameter);
    cb(null, { x, y });
  } catch(e) {
    cb(new Error(`[400] ${e.toString()}`))
  }
};
