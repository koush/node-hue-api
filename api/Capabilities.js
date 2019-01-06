'use strict';

const capabilitiesApi = require('./http/endpoints/capabilities')
  , ApiDefinition = require('./http/ApiDefinition')
;

module.exports = class Capabilities extends ApiDefinition {

  constructor(hueApi, request) {
    super(hueApi, request);
  }

  getAll() {
    return this.execute(capabilitiesApi.getAll);
  }
};