const express = require('express')

const router = express.Router()

const { home, about, contact } = require("../controller/home.controller")
// router.get("/", (req, res) => { <--- instead of coding (req, res) => {....}
//     res.send("Home")
// })
router.get("/", home) // <--- just call 'home' and use the controller to solely handle routing logic

router.get("/about", about)

router.get("/contact", contact)

module.exports = router