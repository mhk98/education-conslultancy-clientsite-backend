const db = require("../../../models");
const TeamIntroduction = db.teamIntroduction;

const insertIntoDB = async (data) => {
  const result = await TeamIntroduction.create(data);

  return result;
};

const getAllFromDB = async () => {
  const result = await TeamIntroduction.findOne({
    where: {}, // দরকার হলে শর্ত দিন
    order: [["createdAt", "DESC"]], // latest
  });
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await TeamIntroduction.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await TeamIntroduction.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const TeamIntroductionService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = TeamIntroductionService;
