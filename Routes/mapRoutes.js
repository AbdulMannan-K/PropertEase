
const { getAllMaps,getMap,createMap,updateMap, deleteMap} = require("../Controller/mapController");

const mapRouter = require("express").Router();
const upload=require("../Middlewares/middlewares")
const {verifyToken, verifyAdmin} = require("../Middlewares/middlewares");


mapRouter.get("/" ,verifyToken, getAllMaps)
mapRouter.get("/:id",verifyToken , getMap)

mapRouter.post("/",verifyToken,verifyAdmin,(req,res,next)=>{upload} , createMap)

mapRouter.delete("/:id",verifyToken,verifyAdmin,deleteMap)
mapRouter.patch("/:id",verifyToken,verifyAdmin,(req,res,next)=>{upload},updateMap)


module.exports = mapRouter;



