const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const Gallery = db.gallery;

const insertIntoDB = async (data) => {
  const { title, text, image } = data;

  const result = await Gallery.create({
    title,
    text,
    image,
  });

  return result;
};

const getAllFromDB = async () => {
  const result = await Gallery.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Gallery.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await Gallery.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const GalleryService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = GalleryService;
