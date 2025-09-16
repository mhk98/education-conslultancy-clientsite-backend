const { Op, where } = require("sequelize"); // Ensure Op is imported
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const { BannerSearchAbleFields } = require("./banner.constants");
const Banner = db.banner;

const insertIntoDB = async (data) => {
  const { title, text, files } = data;

  // Step 1: Extract file names or paths from req.files
  let filePaths = [];

  if (Array.isArray(files)) {
    // For uploadMultiple (array of files)
    filePaths = files.map((file) => file.filename); // or file.path if you want full path
  } else if (typeof files === "object" && files !== null) {
    // For .fields() — multiple named fields (files.tenthMarksheet, etc.)
    Object.keys(files).forEach((field) => {
      files[field].forEach((file) => {
        filePaths.push(file.filename);
      });
    });
  }

  const result = await Banner.create({
    title,
    text,
    files: filePaths, // stored as JSON array in DB
  });

  return result;
};

const getAllFromDB = async () => {
  const result = await Banner.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Banner.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await Banner.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const BannerService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = BannerService;
