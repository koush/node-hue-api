'use strict';

const deviceBuilder = require('../bridge-model');


class Cache {

  constructor(data) {
    this.data = data;
    this._lights = {};
  }

  getLight(id) {
    let light = this._lights[id];

    if (!light) {
      let lightData = this.data.lights[id];
      if (lightData) {
        light = deviceBuilder.buildLight(id, lightData);
        this._lights[id] = light;
      }
    }

    return light;
  }
}
module.exports = Cache;