const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadMultiple } = require("../../middlewares/upload");
const BannerController = require("./banner.controller");
const router = require("express").Router();

router.post("/create", uploadMultiple, BannerController.insertIntoDB);
router.get("/", BannerController.getAllFromDB);
router.delete("/:id", BannerController.deleteIdFromDB);
router.put("/:id", uploadMultiple, BannerController.updateOneFromDB);

const BannerRoutes = router;
module.exports = BannerRoutes;
