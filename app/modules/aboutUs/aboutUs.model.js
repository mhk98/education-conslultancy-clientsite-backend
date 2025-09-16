module.exports = (sequelize, DataTypes) => {
  const AboutUs = sequelize.define("AboutUs", {
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
    image1: {
      type: DataTypes.STRING, // for storing multiple file names/paths
      allowNull: true,
    },
    image2: {
      type: DataTypes.STRING, // for storing multiple file names/paths
      allowNull: true,
    },
    image3: {
      type: DataTypes.STRING, // for storing multiple file names/paths
      allowNull: true,
    },
  });

  return AboutUs;
};
