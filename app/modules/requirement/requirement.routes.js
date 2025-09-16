const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadSingle } = require("../../middlewares/upload");
const RequirementController = require("./requirement.controller");
const router = require("express").Router();

router.post("/create", uploadSingle, RequirementController.insertIntoDB);
router.get("/", RequirementController.getAllFromDB);
router.delete("/:id", RequirementController.deleteIdFromDB);
router.put("/:id", uploadSingle, RequirementController.updateOneFromDB);

const RequirementRoutes = router;
module.exports = RequirementRoutes;
