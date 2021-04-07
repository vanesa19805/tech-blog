const router= require("express").Router()

const db=require("../models")


router.get("/", (req,res) => {
    // db.Post.findAll().then(results=>{
        res.render("homepage")
    // })
})
module.exports= router;