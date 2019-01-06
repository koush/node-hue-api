'use strict';

const Placeholder = require('./PlaceHolder')
  , ApiError = require('../../../hue-api/errors')
;


module.exports = class UsernamePlaceholder extends Placeholder {

  constructor(name) {
    super(name || 'username');
  }

  getValue(parameters) {
    const value = super.getValue(parameters);

    if (typeof value !== 'string') {
      throw new ApiError('Username must be of type string');
    }
    return value;
  }
};
