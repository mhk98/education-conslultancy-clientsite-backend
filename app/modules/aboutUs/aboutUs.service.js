const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const AboutUs = db.aboutUs;

const insertIntoDB = async (data) => {
  const result = await AboutUs.create(data);

  return result;
};

const getAllFromDB = async () => {
  const result = await AboutUs.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await AboutUs.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await AboutUs.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const AboutUsService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = AboutUsService;
