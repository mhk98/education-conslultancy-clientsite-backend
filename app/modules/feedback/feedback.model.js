module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define("Feedback", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    designation: {
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

  return Feedback;
};
