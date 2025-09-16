const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadTriple } = require("../../middlewares/upload");
const AboutUsController = require("./aboutUs.controller");
const router = require("express").Router();

router.post("/create", uploadTriple, AboutUsController.insertIntoDB);
router.get("/", AboutUsController.getAllFromDB);
router.delete("/:id", AboutUsController.deleteIdFromDB);
router.put("/:id", uploadTriple, AboutUsController.updateOneFromDB);

const AboutUsRoutes = router;
module.exports = AboutUsRoutes;
