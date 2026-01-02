const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const GalleryService = require("./gallery.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const data = {
    image: req.file ? req.file.path : undefined,
  };

  const result = await GalleryService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Gallery successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await GalleryService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Gallery data fetched!!",
    data: result,
  });
});

const updateOneFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const data = {
    image: req.file ? req.file.path : undefined,
  };

  const result = await GalleryService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Gallery update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await GalleryService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Gallery delete successfully!!",
    data: result,
  });
});

const GalleryController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = GalleryController;
