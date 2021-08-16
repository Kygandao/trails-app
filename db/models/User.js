const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');
const bcrypt = require('bcrypt');

//MODEL FOR USER ACCOUNT AND PASSWORD STORAGE

class User extends Model {
  validatePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}
User.init(
  {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { sequelize, modelName: 'user' }
);

User.addHook('beforeCreate', async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
  return user;
});

module.exports = User;