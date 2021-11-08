const { Router } = require("express");
const controllers = require("../controllers");
const multer = require("multer");

const uploads = multer({
  dest: "./",
});

const router = Router();

router.post("/signUp", uploads.single("avatar"), controllers.user.signUp);
router.post("/signIn", controllers.user.signIn);

module.exports = router;
