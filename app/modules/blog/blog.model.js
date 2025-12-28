const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Blogs = sequelize.define(
    "Blogs",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      metaTitle: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      metaDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_unicode_ci",
      tableName: "Blogs", // optional, নাম ফিক্স করতে চাইলে
    }
  );

  return Blogs;
};
