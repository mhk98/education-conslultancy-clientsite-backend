const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const pick = require("../../../shared/pick");
const RequirementService = require("./requirement.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const { title, text } = req.body;

  const data = {
    title,
    text,
    image: req.file ? req.file.path : undefined,
  };

  const result = await RequirementService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Requirement successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await RequirementService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Requirement data fetched!!",
    data: result,
  });
});

const updateOneFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const { title, text } = req.body;

  const data = {
    title: title === "" ? undefined : title,
    text: text === "" ? undefined : text,
    image: req.file ? req.file.path : undefined,
  };

  const result = await RequirementService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Requirement update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await RequirementService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Requirement delete successfully!!",
    data: result,
  });
});

const RequirementController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = RequirementController;
