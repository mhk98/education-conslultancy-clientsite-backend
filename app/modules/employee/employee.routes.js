const { ENUM_USER_ROLE } = require("../../enums/user");
const { uploadSingle } = require("../../middlewares/upload");
const EmployeeController = require("./employee.controller");
const router = require("express").Router();

router.post("/create", uploadSingle, EmployeeController.insertIntoDB);
router.get("/", EmployeeController.getAllFromDB);
router.delete("/:id", EmployeeController.deleteIdFromDB);
router.put("/:id", uploadSingle, EmployeeController.updateOneFromDB);

const EmployeeRoutes = router;
module.exports = EmployeeRoutes;
