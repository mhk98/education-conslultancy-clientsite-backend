const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const Course = db.course;

const insertIntoDB = async (data) => {
  const { title, text, image } = data;

  const result = await Course.create({
    title,
    text,
    image,
  });

  return result;
};

const getAllFromDB = async () => {
  const result = await Course.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Course.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await Course.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const CourseService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = CourseService;
