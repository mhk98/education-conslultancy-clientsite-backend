const db = require("../../../models");
const Study = db.study;

const insertIntoDB = async (data) => {
  const result = await Study.create(data);

  return result;
};

const getAllFromDB = async () => {
  const result = await Study.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Study.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await Study.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const StudyService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = StudyService;
