const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const pick = require("../../../shared/pick");
const CountryService = require("./country.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const { title } = req.body;

  const data = {
    title,
    image: req.file ? req.file.path : undefined,
  };

  const result = await CountryService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Country successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await CountryService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Country data fetched!!",
    data: result,
  });
});

const updateOneFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const { title, text } = req.body;

  const data = {
    title: title === "" ? undefined : title,
    text: text === "" ? undefined : text,
    image: req.file ? req.files.path : undefined,
  };

  const result = await CountryService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Country update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await CountryService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Country delete successfully!!",
    data: result,
  });
});

const CountryController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = CountryController;
