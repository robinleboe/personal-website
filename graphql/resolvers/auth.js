const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/user');

module.exports = {
  loginUser: async ({ email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error('User does not exist!');
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      throw new Error('Password is incorrect!');
    }
    token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      'somesupersecretkey',
      { expiresIn: '1h' }
    );
    return { userId: user.id, token: token, tokenExpiration: 1 };
  },
};
