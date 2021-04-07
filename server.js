const express= require("express");

const app= express();
const PORT= process.env.PORT || 3001
const expressHandlebars= require("express-handlebars");
 

app.engine("handlebars", expressHandlebars({defaultLayout:"main"}))
app.set("view engine","handlebars");
app.use(express.static("public"));


app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(require("./routes"))

const sequelize= require("./config/connection")


sequelize.sync().then(function(){ 
    app.listen(PORT, function(){
        console.log("app is listening"+ PORT)
    })
})