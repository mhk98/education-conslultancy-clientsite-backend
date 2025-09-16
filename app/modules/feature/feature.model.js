module.exports = (sequelize, DataTypes) => {
  const Feature = sequelize.define("Feature", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING, // for storing multiple file names/paths
      allowNull: true,
    },
  });

  return Feature;
};
