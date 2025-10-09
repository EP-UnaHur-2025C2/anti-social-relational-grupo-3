"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, { foreignKey: "userId" });

      // User.belongsToMany(User, {
      //   through: "Followers",
      //   as: "Seguidores", // los que lo siguen
      //   foreignKey: "followedId",
      // });

      // User.belongsToMany(User, {
      //   through: "Followers",
      //   as: "Seguidos", // los que él sigue
      //   foreignKey: "followerId",
      // });
    }
  }
  User.init(
    {
      nickName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
