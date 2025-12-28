const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadSingle } = require("../../middlewares/upload");
const BlogController = require("./blog.controller");
const router = require("express").Router();

// router.post("/create", uploadSingle, uploadMultiple, NewsController.insertIntoDB);

router.post("/create", uploadSingle, BlogController.insertIntoDB);
router.get("/:id", BlogController.getDataById);
router.get("/", BlogController.getAllFromDB);
router.delete("/:id", BlogController.deleteIdFromDB);
router.put("/:id", uploadSingle, BlogController.updateOneFromDB);

const BlogRoutes = router;
module.exports = BlogRoutes;
