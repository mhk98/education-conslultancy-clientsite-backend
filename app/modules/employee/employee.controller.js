const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const EmployeeService = require("./employee.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const { name, designation } = req.body;

  const data = {
    name,
    designation,
    image: req.file ? req.file.path : undefined,
  };

  const result = await EmployeeService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Course successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await EmployeeService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Employee data fetched!!",
    data: result,
  });
});

const updateOneFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const { name, designation } = req.body;

  const data = {
    name: name === "" ? undefined : name,
    designation: designation === "" ? undefined : designation,
    image: req.file ? req.file.path : undefined,
  };

  const result = await EmployeeService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Employee update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await EmployeeService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Employee delete successfully!!",
    data: result,
  });
});

const EmployeeController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = EmployeeController;
