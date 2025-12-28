const { Op } = require("sequelize");
const paginationHelpers = require("../../../helpers/paginationHelper");
const db = require("../../../models");
const ApiError = require("../../../error/ApiError");
const Blog = db.blog;

const insertIntoDB = async (data, image) => {
  const { title, content, metaTitle, metaDescription } = data;

  const info = {
    title,
    metaTitle,
    metaDescription,
    image,
    content,
  };

  console.log("BlogData:", info);

  // Insert into database
  const result = await Blog.create(info);
  return result;
};

const getAllFromDB = async (filters, options) => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  const { searchTerm, ...filterData } = filters;

  let andConditions = [];

  // Match `title` starting from the search term
  if (searchTerm) {
    andConditions.push({
      title: { [Op.like]: `${searchTerm}%` },
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      [Op.and]: Object.entries(filterData).map(([key, value]) => ({
        [key]: { [Op.eq]: value },
      })),
    });
  }

  let whereConditions =
    andConditions.length > 0 ? { [Op.and]: andConditions } : {};

  // Try to find Blog matching `title`
  let result = await Blog.findAll({
    where: whereConditions,
    offset: skip,
    limit,
    order:
      options.sortBy && options.sortOrder
        ? [[options.sortBy, options.sortOrder.toUpperCase()]]
        : [["createdAt", "ASC"]],
  });

  // If no Blog are found with `title`, fallback to `tag`
  if (result.length === 0 && searchTerm) {
    andConditions = [];
    // andConditions.push({
    //   tag: { [Op.like]: `%${searchTerm}%` }, // Matches anywhere in `tag`
    // });

    if (Object.keys(filterData).length > 0) {
      andConditions.push({
        [Op.and]: Object.entries(filterData).map(([key, value]) => ({
          [key]: { [Op.eq]: value },
        })),
      });
    }

    whereConditions = { [Op.and]: andConditions };

    result = await Blog.findAll({
      where: whereConditions,
      offset: skip,
      limit,
      order:
        options.sortBy && options.sortOrder
          ? [[options.sortBy, options.sortOrder.toUpperCase()]]
          : [["createdAt", "ASC"]],
    });
  }

  const total = await Blog.count({ where: whereConditions });

  // If no Blogs are found in both `title` and `tag`
  if (result.length === 0) {
    throw new ApiError(404, "Blog not found");
  }

  return {
    meta: { total, page, limit },
    data: result,
  };
};

const getDataById = async (id) => {
  const result = await Blog.findOne({
    where: {
      id: id,
    },
  });

  return result;
};

const deleteIdFromDB = async (id) => {
  const result = await Blog.destroy({
    where: {
      id: id,
    },
  });

  return result;
};

const updateOneFromDB = async (id, data, image) => {
  // ✅ প্রথমে পুরোনো Blog ডাটাটা খুঁজে বের কর
  const existingBlog = await Blog.findByPk(id);
  if (!existingBlog) {
    throw new Error("Blog not found");
  }
  const { title, content, metaTitle, metaDescription } = data;
  // ✅ ডেটা destructure করে আগের মান fallback হিসেবে দিচ্ছি
  const info = {
    title: title || existingBlog.title,
    content: content || existingBlog.content,
    metaTitle: metaTitle || existingBlog.metaTitle,
    metaDescription: metaDescription || existingBlog.metaDescription,
    image: image || existingBlog.image,
  };

  console.log("BlogData:", info);

  // ✅ এখন ডাটাবেজে আপডেট করো
  const result = await Blog.update(info, { where: { id } });

  return result;
};

const BlogService = {
  getAllFromDB,
  insertIntoDB,
  deleteIdFromDB,
  updateOneFromDB,
  getDataById,
};

module.exports = BlogService;
