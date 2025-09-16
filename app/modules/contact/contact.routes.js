const { ENUM_USER_ROLE } = require("../../enums/user");
const auth = require("../../middlewares/auth");
const { uploadMultiple, uploadSingle } = require("../../middlewares/upload");
const ContactController = require("./contact.controller");
const router = require("express").Router();

router.post("/create", uploadSingle, ContactController.insertIntoDB);
router.get("/", ContactController.getAllFromDB);
router.delete("/:id", ContactController.deleteIdFromDB);
router.put("/:id", uploadSingle, ContactController.updateOneFromDB);

const ContactRoutes = router;
module.exports = ContactRoutes;
