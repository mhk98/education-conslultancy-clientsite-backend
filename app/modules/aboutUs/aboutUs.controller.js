const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const ApiError = require("../../../error/ApiError");
const pick = require("../../../shared/pick");
const AboutUsService = require("./aboutUs.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const { title, text, subTitle1, subText1, subTitle2, subText2 } = req.body;
  const { image1, image2, image3 } = req.files || {};
  const data = {
    title,
    text,
    subTitle1,
    subText1,
    subTitle2,
    subText2,
    image1: image1 && image1[0] ? image1[0].path || "" : "",
    image2: image2 && image2[0] ? image2[0].path || "" : "",
    image3: image3 && image3[0] ? image3[0].path || "" : "",
  };

  const result = await AboutUsService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "AboutUs successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await AboutUsService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "AboutUs data fetched!!",
    data: result,
  });
});

const updateOneFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const { title, text, subTitle1, subText1, subTitle2, subText2 } = req.body;
  const { image1, image2, image3 } = req.files || {};

  const data = {
    title: title === "" ? undefined : title,
    text: text === "" ? undefined : text,
    subTitle1: subTitle1 === "" ? undefined : subTitle1,
    subText1: subText1 === "" ? undefined : subText1,
    subTitle2: subTitle2 === "" ? undefined : subTitle2,
    subText2: subText2 === "" ? undefined : subText2,
    image1: image1 && image1[0].path,
    image2: image2 && image2[0].path,
    image3: image3 && image3[0].path,
  };

  const result = await AboutUsService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "AboutUs update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await AboutUsService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "AboutUs delete successfully!!",
    data: result,
  });
});

const AboutUsController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = AboutUsController;
