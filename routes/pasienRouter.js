const express = require("express")
const router = express.Router()
const pasienController = require("../controller/pasienController")

router.get("/", pasienController.index)
router.get("/create", pasienController.create)
router.post("/", pasienController.store)
router.get("/:id/edit", pasienController.edit)
router.put("/:id", pasienController.update)
router.delete("/:id", pasienController.destroy)
module.exports = router
