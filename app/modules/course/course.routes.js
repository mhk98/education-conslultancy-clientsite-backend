const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadMultiple } = require("../../middlewares/upload");
const CourseController = require("./course.controller");
const router = require("express").Router();

router.post("/create", uploadMultiple, CourseController.insertIntoDB);
router.get("/", CourseController.getAllFromDB);
router.delete("/:id", CourseController.deleteIdFromDB);
router.put("/:id", CourseController.updateOneFromDB);

const CourseRoutes = router;
module.exports = CourseRoutes;
