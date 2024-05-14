const router = require("express").Router();

//Services router

const servicesRouter = require("./services");

router.use("/", servicesRouter);

//Modal router

//1:01:21

module.exports = router;
