const db = require("../../../models");
const Customize = db.customize;

const insertIntoDB = async (data) => {
  const result = await Customize.create(data);

  return result;
};

const getAllFromDB = async () => {
  const result = await Customize.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Customize.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await Customize.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const CustomizeService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = CustomizeService;
