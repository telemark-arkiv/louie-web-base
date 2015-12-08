'use strict'

function validateJWT (decoded, request, callback) {
  if (!decoded) {
    return callback(null, false)
  } else {
    return callback(null, true)
  }
}

module.exports = validateJWT
