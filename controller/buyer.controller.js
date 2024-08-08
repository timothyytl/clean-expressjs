function buyerCreate(req, res) {
    res.send("Buyer created product!")
}

function buyerEdit(req, res) {
    res.send("Buyer edited product!")
}

function buyerDelete(req, res) {
    res.send("Buyer deleted product!")
}

module.exports = {
    buyerCreate,
    buyerEdit,
    buyerDelete
}