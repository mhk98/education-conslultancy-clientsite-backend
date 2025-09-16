module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define("Contact", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    location: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    branch: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING, // for storing multiple file names/paths
      allowNull: true,
    },
  });

  return Contact;
};
