const usersResolver = require('./users');

const rootResolvers = {
  ...usersResolver,
};

module.exports = rootResolvers;
