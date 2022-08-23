require('dotenv-safe').config();

module.exports = {
  jwt: {
    secret: process.env.SECRET,
    expiresIn: '1d',
  },
};
