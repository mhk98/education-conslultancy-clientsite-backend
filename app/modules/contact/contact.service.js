const db = require("../../../models");
const Contact = db.contact;

const insertIntoDB = async (data) => {
  const result = await Contact.create(data);

  return result;
};

const getAllFromDB = async () => {
  const result = await Contact.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Contact.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await Contact.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const ContactService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = ContactService;
