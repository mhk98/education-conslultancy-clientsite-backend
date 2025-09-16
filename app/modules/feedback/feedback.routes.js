const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadMultiple, uploadSingle } = require("../../middlewares/upload");
const FeedbackController = require("./feedback.controller");
const router = require("express").Router();

router.post("/create", uploadSingle, FeedbackController.insertIntoDB);
router.get("/", FeedbackController.getAllFromDB);
router.delete("/:id", FeedbackController.deleteIdFromDB);
router.put("/:id", uploadSingle, FeedbackController.updateOneFromDB);

const FeedbackRoutes = router;
module.exports = FeedbackRoutes;
