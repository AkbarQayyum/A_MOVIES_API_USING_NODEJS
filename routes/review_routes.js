const express = require("express");
const router = express.Router();
const review_controller = require("../data/reviews");
router.get("/:id", review_controller.getAllReview);
router.get("/getReview/:movieid/:reviewid", review_controller.getReview);
router.post("/create", review_controller.createReview);
router.delete("/delete/:movieid/:reviewid", review_controller.removeReview);

module.exports = router;
