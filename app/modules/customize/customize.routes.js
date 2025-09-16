const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadSingle } = require("../../middlewares/upload");
const CustomizeController = require("./customize.controller");
const router = require("express").Router();

router.post("/create", uploadSingle, CustomizeController.insertIntoDB);
router.get("/", CustomizeController.getAllFromDB);
router.delete("/:id", CustomizeController.deleteIdFromDB);
router.put("/:id", uploadSingle, CustomizeController.updateOneFromDB);

const CustomizeRoutes = router;
module.exports = CustomizeRoutes;
