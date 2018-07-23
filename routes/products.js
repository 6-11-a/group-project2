const express      = require('express');
const mongoose     = require('mongoose');
const router       = express.Router();
const Product      = mongoose.model('Product');

router.get("/", (req, res) => {
    Product.find({}, ((err, products) => {
		if (err) {
			res.send(err);
		} else {
			res.json(products);
		}
	}))
});

module.exports = router;
