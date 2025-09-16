module.exports = (sequelize, DataTypes) => {
  const Customize = sequelize.define("Customize", {
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
    subText1: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    subTitle1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subText2: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    subTitle2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subText3: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    subTitle3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING, // for storing multiple file names/paths
      allowNull: true,
    },
  });

  return Customize;
};
