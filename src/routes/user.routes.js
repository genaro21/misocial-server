const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.post("/signUp", controllers.user.signUp);
router.post("/signIn", controllers.user.signIn);

module.exports = router;
