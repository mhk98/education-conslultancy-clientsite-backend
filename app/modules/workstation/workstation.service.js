const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const WorkStation = db.workStation;

const insertIntoDB = async (data) => {
  const { title, text, image } = data;

  const result = await WorkStation.create({
    title,
    text,
    image,
  });

  return result;
};

const getAllFromDB = async () => {
  const result = await WorkStation.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await WorkStation.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await WorkStation.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const WorkStationService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = WorkStationService;
