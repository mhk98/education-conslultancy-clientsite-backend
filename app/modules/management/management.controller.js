const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const ManagementService = require("./management.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const { name, designation } = req.body;

  const data = {
    name,
    designation,
    image: req.file ? req.file.path : undefined,
  };

  const result = await ManagementService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Management successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await ManagementService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Management data fetched!!",
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

  const result = await ManagementService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Management update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await ManagementService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Management delete successfully!!",
    data: result,
  });
});

const ManagementController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = ManagementController;
