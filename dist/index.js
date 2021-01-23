
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./blong.cjs.production.min.js')
} else {
  module.exports = require('./blong.cjs.development.js')
}
