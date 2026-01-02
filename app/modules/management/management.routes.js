const { uploadSingle } = require("../../middlewares/upload");
const ManagementController = require("./management.controller");
const router = require("express").Router();

router.post("/create", uploadSingle, ManagementController.insertIntoDB);
router.get("/", ManagementController.getAllFromDB);
router.delete("/:id", ManagementController.deleteIdFromDB);
router.put("/:id", uploadSingle, ManagementController.updateOneFromDB);

const ManagementRoutes = router;
module.exports = ManagementRoutes;
