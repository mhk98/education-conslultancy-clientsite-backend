const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const ApiError = require("../../../error/ApiError");
const pick = require("../../../shared/pick");
const FeatureService = require("./feature.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const { title, text } = req.body;

  const data = {
    title,
    text,
    image: req.file ? req.file.path : undefined,
  };

  const result = await FeatureService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Feature successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await FeatureService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Feature data fetched!!",
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

  console.log("data", data);
  const result = await FeatureService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Feature update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await FeatureService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Feature delete successfully!!",
    data: result,
  });
});

const FeatureController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = FeatureController;
