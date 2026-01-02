const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadSingle } = require("../../middlewares/upload");
const WorkStationController = require("./workstation.controller");
const router = require("express").Router();

router.post("/create", uploadSingle, WorkStationController.insertIntoDB);
router.get("/", WorkStationController.getAllFromDB);
router.delete("/:id", WorkStationController.deleteIdFromDB);
router.put("/:id", uploadSingle, WorkStationController.updateOneFromDB);

const WorkStationRoutes = router;
module.exports = WorkStationRoutes;
