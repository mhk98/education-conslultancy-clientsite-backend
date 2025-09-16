const db = require("../../../models");
const Feature = db.feature;

const insertIntoDB = async (data) => {
  const { title, text, image } = data;

  const result = await Feature.create({
    title,
    text,
    image,
  });

  return result;
};

const getAllFromDB = async () => {
  const result = await Feature.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Feature.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await Feature.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const FeatureService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = FeatureService;
