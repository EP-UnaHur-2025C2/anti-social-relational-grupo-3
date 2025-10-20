'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post_Image extends Model {
    static associate(models) {

      Post_Image.belongsTo(models.Post, { foreignKey: 'postId' });
    }
  }
  Post_Image.init({
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Post_Image',
    tableName: 'Post_Images' // Asegurar el nombre correcto de la tabla
  });
  return Post_Image;
};