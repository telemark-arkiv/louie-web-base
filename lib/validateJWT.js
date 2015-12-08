'use strict'

function validateJWT (decoded, request, callback) {
  console.log(request)
  var louie = request.session.get('louie')
  console.log(louie)
  if (!decoded) {
    return callback(null, false)
  } else {
    request.session.set('whoami', decoded)
    return callback(null, true)
  }
}

module.exports = validateJWT
