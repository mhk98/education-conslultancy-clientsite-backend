const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadMultiple, uploadSingle } = require("../../middlewares/upload");
const TeamIntroductionController = require("./teamIntroduction.controller");
const router = require("express").Router();

router.post("/create", uploadSingle, TeamIntroductionController.insertIntoDB);
router.get("/", TeamIntroductionController.getAllFromDB);
router.delete("/:id", TeamIntroductionController.deleteIdFromDB);
router.put("/:id", uploadSingle, TeamIntroductionController.updateOneFromDB);

const TeamIntroductionRoutes = router;
module.exports = TeamIntroductionRoutes;
