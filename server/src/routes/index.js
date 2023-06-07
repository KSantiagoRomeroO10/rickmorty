const { Router } = require('express');

const { getCharById } = require('../controllers/getCharById');
const { getCharDetail } = require('../controllers/getCharDetail');
const { postFav, getFav, deleteFav } = require('../controllers/favorites');

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.post("/favorites", postFav);
router.get("/favorites", getFav)
router.delete("/favorites/:id", deleteFav)

module.exports = router;