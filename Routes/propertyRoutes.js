
const { getAllProperties,getProperty,createProperty,updateProperty, deleteProperty} = require("../Controller/propertyController");

const propertyRouter = require("express").Router();
const upload=require("../Middlewares/upload")


propertyRouter.get("/" , getAllProperties)
propertyRouter.get("/:id" , getProperty)

propertyRouter.post("/",upload , createProperty)

propertyRouter.delete("/:id",deleteProperty)
propertyRouter.patch("/:id",upload,updateProperty)


module.exports = propertyRouter;



