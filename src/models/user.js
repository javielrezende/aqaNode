'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    phone: DataTypes.STRING,
    avatar: DataTypes.STRING,
    entity: DataTypes.BOOLEAN,
    message: DataTypes.TEXT,
    entity_request: DataTypes.BOOLEAN,
    status: DataTypes.BOOLEAN,
    entity_description: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};