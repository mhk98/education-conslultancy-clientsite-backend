const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const StudyService = require("./study.service");

const insertIntoDB = catchAsync(async (req, res) => {
  const {
    name,
    text,
    requirements,
    programs,
    IELTS,
    solvency,
    processing,
    scholarships,
  } = req.body;

  const data = {
    name,
    text,
    requirements,
    programs,
    IELTS,
    solvency,
    processing,
    scholarships,
    // image: req.file ? req.file.path : undefined,
    image: req.file ? req.file.path : undefined,
  };

  const result = await StudyService.insertIntoDB(data);
  console.log("result", result);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Study successfully created!!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const result = await StudyService.getAllFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Study data fetched!!",
    data: result,
  });
});

const updateOneFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;

  const { name, text, requirements, programs, IELTS, solvency, processing, scholarships} =
    req.body;

    console.log(req.body)
  const data = {
    name: name === "" ? undefined : name,
    text: text === "" ? undefined : text,
    requirements: requirements === "" ? undefined : requirements,
    programs: programs === "" ? undefined : programs,
    IELTS: IELTS === "" ? undefined : IELTS,
    solvency: solvency === "" ? undefined : solvency,
    processing: processing === "" ? undefined : processing,
    scholarships: scholarships === "" ? undefined : scholarships,
    // image: req.file ? req.files.path : undefined,
    image: req.file ? req.file.path : undefined,
  };

  const result = await StudyService.updateOneFromDB(id, data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Study update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  console.log("deleteId", id);

  const result = await StudyService.deleteIdFromDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Study delete successfully!!",
    data: result,
  });
});

const StudyController = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
};

module.exports = StudyController;
