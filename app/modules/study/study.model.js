module.exports = (sequelize, DataTypes) => {
  const Study = sequelize.define("Study", {
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
    text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    requirements: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    programs: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    IELTS: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    solvency: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    processing: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    scholarships: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Study;
};
