/* eslint-disable camelcase */
require('dotenv').config()
const keys = {
  mongoURI:process.env.CONNECTION_URL,
  secretOrKey:process.env.SECRET_KEY,
}
module.exports = keys;nv