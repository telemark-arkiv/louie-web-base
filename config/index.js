'use strict'

var config = {
  SERVER_PORT: process.env.SERVER_PORT || 8000,
  API_URL: process.env.API_URL || 'http://192.168.99.100:3000',
  JWT_SECRET: process.env.JWT_SECRET || 'NeverShareYourSecret',
  YAR_SECRET: process.env.YAR_SECRET || 'NeverShareYourSecret',
  COOKIE_SECRET: process.env.COOKIE_SECRET || 'NeverShareYourSecret'
}

module.exports = config
