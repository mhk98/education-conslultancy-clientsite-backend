const catchAsync = require("../../../shared/catchAsync");
const sendResponse = require("../../../shared/sendResponse");
const pick = require("../../../shared/pick");
const BlogService = require("./blog.service");
const { BlogsFilterAbleFileds } = require("./blog.constants");

const insertIntoDB = catchAsync(async (req, res) => {
  try {
    const data = req.body;

    const image = req.file ? req.file.path : undefined;

    const result = await BlogService.insertIntoDB(data, image);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Blog data created!!",
      data: result,
    });
  } catch (error) {
    console.error("Error inserting Blog:", error.message);
    sendResponse(res, {
      statusCode: 400,
      success: false,
      message: error.message,
    });
  }
});

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, BlogsFilterAbleFileds);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  console.log("filters", req.query);

  const result = await BlogService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog data fetched!!",
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const result = await BlogService.getDataById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog data fetched!!",
    data: result,
  });
});

const updateOneFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const image = req.file ? req.file.path : undefined;

  const result = await BlogService.updateOneFromDB(id, data, image);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog update successfully!!",
    data: result,
  });
});

const deleteIdFromDB = catchAsync(async (req, res) => {
  const result = await BlogService.deleteIdFromDB(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog delete successfully!!",
    data: result,
  });
});

const BlogController = {
  getAllFromDB,
  insertIntoDB,
  getDataById,
  updateOneFromDB,
  deleteIdFromDB,
};

module.exports = BlogController;
