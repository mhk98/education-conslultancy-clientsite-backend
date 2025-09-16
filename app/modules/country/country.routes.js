const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadSingle } = require("../../middlewares/upload");
const CountryController = require("./country.controller");
const router = require("express").Router();

router.post("/create", uploadSingle, CountryController.insertIntoDB);
router.get("/", CountryController.getAllFromDB);
router.delete("/:id", CountryController.deleteIdFromDB);
router.put("/:id", uploadSingle, CountryController.updateOneFromDB);

const CountryRoutes = router;
module.exports = CountryRoutes;
