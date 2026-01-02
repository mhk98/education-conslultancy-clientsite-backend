const { uploadSingle } = require("../../middlewares/upload");
const router = require("express").Router();
const GalleryController = require("./gallery.controller");

router.post("/create", uploadSingle, GalleryController.insertIntoDB);
router.get("/", GalleryController.getAllFromDB);
router.delete("/:id", GalleryController.deleteIdFromDB);
router.put("/:id", uploadSingle, GalleryController.updateOneFromDB);

const GalleryRoutes = router;
module.exports = GalleryRoutes;
