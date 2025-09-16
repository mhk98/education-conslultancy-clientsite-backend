module.exports = (sequelize, DataTypes) => {
  const Requirement = sequelize.define("Requirement", {
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

  return Requirement;
};
