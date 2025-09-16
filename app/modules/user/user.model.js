const validator = require("validator");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes, Sequelize) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER, // ✅ Must be a numeric type
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },

      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },

      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },

      Password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      Phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },

      Role: {
        type: DataTypes.ENUM("student", "employee", "admin", "superAdmin"),
        allowNull: true,
        defaultValue: "student",
      },
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          if (user.Password) {
            const salt = await bcrypt.genSalt(10);
            user.Password = bcrypt.hashSync(user.Password, salt);
          }
        },
        beforeUpdate: async (user) => {
          if (user.changed("Password") && user.Password) {
            const salt = await bcrypt.genSalt(10);
            user.Password = bcrypt.hashSync(user.Password, salt);
          }
        },
      },
    }
  );

  User.prototype.validPassword = async function (Password) {
    return await bcrypt.compare(Password, this.Password);
  };

  return User;
};
