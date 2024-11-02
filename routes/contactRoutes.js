const express = require("express");

const router = express.Router();

router.route("/").get((req, res) => {
    res.status(200).json({message:"Get the money data"})
});

router.route("/").post((req, res) => {
    res.status(200).json({message:"Create money data"})
});

router.route("/:id").get((req, res) => {
    res.status(200).json({message:`Get money data for ${req.params.id}`})
});

router.route("/:id").put((req, res) => {
    res.status(200).json({message:`Update money data for ${req.params.id}`})
});

router.route("/:id").delete((req, res) => {
    res.status(200).json({message:`Delete money data for ${req.params.id}`})
});

module.exports = router;