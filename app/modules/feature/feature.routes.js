const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadSingle } = require("../../middlewares/upload");
const FeatureController = require("./feature.controller");
const router = require("express").Router();

router.post("/create", uploadSingle, FeatureController.insertIntoDB);
router.get("/", FeatureController.getAllFromDB);
router.delete("/:id", FeatureController.deleteIdFromDB);
router.put("/:id", uploadSingle, FeatureController.updateOneFromDB);

const FeatureRoutes = router;
module.exports = FeatureRoutes;
