const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const TeamIntroductionService = require("./teamIntroduction.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const { title, subTitle, text } = req.body;

  const data = {
    title,
    subTitle,
    text,
  };
  const result = await TeamIntroductionService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "TeamIntroduction successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await TeamIntroductionService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "TeamIntroduction data fetched!!",
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
  };

  const result = await TeamIntroductionService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "TeamIntroduction update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await TeamIntroductionService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "TeamIntroduction delete successfully!!",
    data: result,
  });
});

const TeamIntroductionController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = TeamIntroductionController;
