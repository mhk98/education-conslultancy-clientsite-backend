const db = require("../../../models");
const Feedback = db.feedback;

const insertIntoDB = async (data) => {
  const result = await Feedback.create(data);

  return result;
};

const getAllFromDB = async () => {
  const result = await Feedback.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Feedback.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await Feedback.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const FeedbackService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = FeedbackService;
