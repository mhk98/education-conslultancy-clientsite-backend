const db = require("../../../models");
const Management = db.management;

const insertIntoDB = async (data) => {
  const { name, designation, image } = data;

  const result = await Management.create({
    name,
    designation,
    image,
  });

  return result;
};

const getAllFromDB = async () => {
  const result = await Management.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Management.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await Management.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const ManagementService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = ManagementService;
