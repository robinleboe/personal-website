const User = require('../../models/user');

module.exports = {
  users: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      throw err;
    }
  },
};
