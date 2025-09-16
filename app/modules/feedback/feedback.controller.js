const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const ApiError = require("../../../error/ApiError");
const pick = require("../../../shared/pick");
const FeedbackService = require("./feedback.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const { name,
    designation,
    text } = req.body;

  const data = {
    name,
    designation,
    text,
    image: req.file ? req.file.path : undefined,
  };
  const result = await FeedbackService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Feedback successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await FeedbackService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Feedback data fetched!!",
    data: result,
  });
});

const updateOneFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { name, designation, text } = req.body;

  const data = {
    name: name === "" ? undefined : name,
    designation: designation === "" ? undefined : designation,
    text: text === "" ? undefined : text,
    image: req.file ? req.file.path : undefined,

  };

  const result = await FeedbackService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Feedback update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await FeedbackService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Feedback delete successfully!!",
    data: result,
  });
});

const FeedbackController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = FeedbackController;
