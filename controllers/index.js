class mainController {
    static async test(req, res) {
        res.status(200).send({
            message: "app initialization",
        });
    }
}

module.exports = mainController;
