var app = require("@forkjs/group-router");
var PostController = require("../controllers/PostController");

/**
 * Module : Routes for Application
 * Author : Eshant Sahu
 * Date : 25th, Jul, 2019
 * Source : https://www.npmjs.com/package/@forkjs/group-router
 */
app.group("/posts", function () {

    app.post("/create", (req,res) => {
        res.send("Called posts/create");
    });
    
    app.get("/list",  PostController.list);

});


module.exports = app.router;