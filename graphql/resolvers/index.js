const usersResolver = require('./users');
const authResolver = require('./auth');

const rootResolvers = {
  ...usersResolver,
  ...authResolver,
};

module.exports = rootResolvers;
