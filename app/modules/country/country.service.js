const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const Country = db.country;

const insertIntoDB = async (data) => {
  const { title, text, image } = data;

  const result = await Country.create({
    title,
    text,
    image,
  });

  return result;
};

const getAllFromDB = async () => {
  const result = await Country.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Country.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await Country.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const CountryService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = CountryService;
