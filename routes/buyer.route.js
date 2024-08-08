const express = require("express")

const router = express.Router()


const { buyerCreate, buyerEdit, buyerDelete } = require("../controller/buyer.controller")

// /buyer/create
router.get("/create", buyerCreate)

// /buyer/edit
router.get("/edit", buyerEdit)

// /buyer/delete
router.get("/delete", buyerDelete)

module.exports = router