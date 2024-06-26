const {createUser, getoneuser, updateuser}=require("../controller/usercontroller")

const router=require("express").Router()

router.post("/newuser",createUser)
router.get("/getoneuser/:id", getoneuser )
router.put("/update/:id", updateuser)

module.exports=router