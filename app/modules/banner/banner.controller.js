const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const ApiError = require("../../../error/ApiError");
const pick = require("../../../shared/pick");
const BannerService = require("./banner.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const { title, text } = req.body;

  const data = {
    title,
    text,
    files: req.files,
  };

  const result = await BannerService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Banner successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await BannerService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Banner data fetched!!",
    data: result,
  });
});

const updateOneFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const { title, text } = req.body;

  const data = {
    title: title === "" ? undefined : title,
    text: text === "" ? undefined : text,
    files: req.files ? req.files.path : undefined,
  };

  const result = await BannerService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Banner update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await BannerService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Banner delete successfully!!",
    data: result,
  });
});

const BannerController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = BannerController;
