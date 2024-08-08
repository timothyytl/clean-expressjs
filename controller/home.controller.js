function home(req, res) {
    console.log("This is home!")

    res.send("Home page")
}

function about(req, res) {
    console.log("This is the about page!")

    res.send("About page")
}

function contact(req, res) {
    console.log("This is the contact page!")

    res.send("Contact page")
}

module.exports = {
    home,
    about,
    contact
}