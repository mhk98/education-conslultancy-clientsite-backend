const { uploadSingle } = require("../../middlewares/upload");
const StudyController = require("./study.controller");
const router = require("express").Router();

router.post("/create", uploadSingle, StudyController.insertIntoDB);
router.get("/", StudyController.getAllFromDB);
router.delete("/:id", StudyController.deleteIdFromDB);
router.put("/:id", uploadSingle, StudyController.updateOneFromDB);

const StudyRoutes = router;
module.exports = StudyRoutes;
