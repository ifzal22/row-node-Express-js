const { sampleHandler } = require('./handlers/routeHandlers/simpleHandler');
const { userHandler } = require('./handlers/userHandelar');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
