
const { getAllProperties,getProperty,createProperty,updateProperty, deleteProperty} = require("../Controller/propertyController");

const propertyRouter = require("express").Router();
const {verifyAdmin, verifyToken,upload} = require("../Middlewares/middlewares");


propertyRouter.get("/" ,verifyToken, getAllProperties)
propertyRouter.get("/:id",verifyToken , getProperty)

propertyRouter.post("/",verifyToken, verifyAdmin , createProperty)

propertyRouter.delete("/:id",verifyToken,verifyAdmin,deleteProperty)
propertyRouter.patch("/:id",verifyToken,verifyAdmin,upload,updateProperty)


module.exports = propertyRouter;



