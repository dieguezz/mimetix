// DIST SERVER (production server emulation)
// ----------------------------------------
// ONLY FOR TESTING PURPOSES!
// Don't use outside local environment.

const server = require('pushstate-server');
const projectConfig = require('../config');

server.start({
  port      : projectConfig.SERVER_PORT,
  directory : projectConfig.inDist(),
  file      : '/index.html'
});
