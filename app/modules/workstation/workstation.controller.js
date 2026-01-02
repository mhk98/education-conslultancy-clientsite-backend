const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const WorkStationService = require("./workstation.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const data = {
    image: req.file ? req.file.path : undefined,
  };

  const result = await WorkStationService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "WorkStation successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await WorkStationService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "WorkStation data fetched!!",
    data: result,
  });
});

const updateOneFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const data = {
    image: req.file ? req.file.path : undefined,
  };

  const result = await WorkStationService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "WorkStation update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await WorkStationService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "WorkStation delete successfully!!",
    data: result,
  });
});

const WorkStationController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = WorkStationController;
