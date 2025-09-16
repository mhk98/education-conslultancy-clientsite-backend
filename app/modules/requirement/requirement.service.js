const db = require("../../../models");
const Requirement = db.requirement;

const insertIntoDB = async (data) => {
  const { title, text, image } = data;

  const result = await Requirement.create({
    title,
    text,
    image,
  });

  return result;
};

const getAllFromDB = async () => {
  const result = await Requirement.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Requirement.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await Requirement.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const RequirementService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = RequirementService;
