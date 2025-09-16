const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const ApiError = require("../../../error/ApiError");
const pick = require("../../../shared/pick");
const CustomizeService = require("./customize.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const {
    title,
    text,
    subTitle1,
    subText1,
    subTitle2,
    subText2,
    subTitle3,
    subText3,
  } = req.body;

  const data = {
    title,
    text,
    subTitle1,
    subText1,
    subTitle2,
    subText2,
    subTitle3,
    subText3,
    image: req.file ? req.file.path : undefined,
  };

  const result = await CustomizeService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customize successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await CustomizeService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customize data fetched!!",
    data: result,
  });
});

const updateOneFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const {
    title,
    text,
    subTitle1,
    subText1,
    subTitle2,
    subText2,
    subTitle3,
    subText3,
  } = req.body;

  const data = {
    title: title === "" ? undefined : title,
    text: text === "" ? undefined : text,
    subTitle1: subTitle1 === "" ? undefined : subTitle1,
    subText1: subText1 === "" ? undefined : subText1,
    subTitle2: subTitle2 === "" ? undefined : subTitle2,
    subText2: subText2 === "" ? undefined : subText2,
    subTitle3: subTitle3 === "" ? undefined : subTitle3,
    subText3: subText3 === "" ? undefined : subText3,
    image: req.file ? req.file.path : undefined,
  };

  const result = await CustomizeService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customize update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await CustomizeService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Customize delete successfully!!",
    data: result,
  });
});

const CustomizeController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = CustomizeController;
