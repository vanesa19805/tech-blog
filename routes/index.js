const router= require("express").Router()
const displayRoutes= require("./display-routes")

router.use("/",displayRoutes)
module.exports= router;