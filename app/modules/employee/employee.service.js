const db = require("../../../models");
const Employee = db.employee;

const insertIntoDB = async (data) => {
  const { name, designation, image } = data;
  const result = await Employee.create({
    name,
    designation,
    image,
  });

  return result;
};

const getAllFromDB = async () => {
  const result = await Employee.findAll();
  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Employee.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data) => {
  const result = await Employee.update(data, {
    where: {
      id: id,
    },
  });

  return result;
};

const EmployeeService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = EmployeeService;
