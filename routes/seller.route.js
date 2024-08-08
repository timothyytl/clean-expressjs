const express = require("express")

const router = express.Router()

const { sellerCreate, sellerEdit, sellerDelete } = require("../controller/seller.controller")

// /seller/create
router.get("/create", sellerCreate)

// /seller/edit
router.get("/edit", sellerEdit)

// /seller/delete
router.get("/delete", sellerDelete)

module.exports = router