module.exports = (sequelize, DataTypes) => {
  const TeamIntroduction = sequelize.define("TeamIntroduction", {
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
    subTitle: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  return TeamIntroduction;
};
