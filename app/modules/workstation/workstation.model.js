module.exports = (sequelize, DataTypes) => {
  const WorkStation = sequelize.define("WorkStation", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING, // for storing multiple file names/paths
      allowNull: true,
    },
  });

  return WorkStation;
};
