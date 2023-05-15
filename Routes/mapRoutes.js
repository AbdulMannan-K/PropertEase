
const { getAllMaps,getMap,createMap,updateMap, deleteMap} = require("../Controller/mapController");

const mapRouter = require("express").Router();
const upload=require("../Middlewares/middlewares")


mapRouter.get("/" , getAllMaps)
mapRouter.get("/:id" , getMap)

mapRouter.post("/",upload , createMap)

mapRouter.delete("/:id",deleteMap)
mapRouter.patch("/:id",upload,updateMap)


module.exports = mapRouter;



