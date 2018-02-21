var server = require(__dirname + '/server/server');
server.declareGlobals(__dirname);

server.init();
server.configure();
server.disableCache();

server.start(9999);
