const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

module.exports = {
  createUser: async (args) => {
    try {
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error('User exists!');
      }
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      const user = new User({
        email: args.userInput.email,
        name: args.userInput.name,
        password: hashedPassword,
      });

      const result = await user.save();
      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw new Error('Could not create user!', { cause: err });
    }
  },
  deleteUser: async (args) => {
    try {
      const user = await User.findByIdAndDelete({ _id: args.userId });
      return user;
    } catch (err) {
      throw new Error('Could not delete user!', { cause: err });
    }
  },
  getUser: async (args) => {
    try {
      const user = await User.findById({ _id: args.userId });
      return user;
    } catch (err) {
      throw new Error('Could not find user!', { cause: err });
    }
  },
  getUsers: async () => {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      throw new Error('Could not get users!', { cause: err });
    }
  },
};
