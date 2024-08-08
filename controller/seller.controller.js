function sellerCreate(req, res) {
    res.send("Seller created product!")
}

function sellerEdit(req, res) {
    res.send("Seller edited product!")
}

function sellerDelete(req, res) {
    res.send("Seller deleted product!")
}

module.exports = {
    sellerCreate,
    sellerEdit,
    sellerDelete
}