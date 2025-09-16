module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define("Banner", {
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
    files: {
      type: DataTypes.JSON, // for storing multiple file names/paths
      allowNull: true,
    },
  });

  return Banner;
};
