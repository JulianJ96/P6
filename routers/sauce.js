const express = require('express');
const sauceRouter = express.Router();


const auth = require('../middleware/token');
const multer = require('../middleware/multer-config');

const sauceCtrl = require('../controllers/sauceCtrl');


sauceRouter.get('/', auth, sauceCtrl.getAllSauces);
sauceRouter.get('/:id', auth, sauceCtrl.getOneSauce);
sauceRouter.post('/', auth, multer, sauceCtrl.createSauce);
sauceRouter.put('/:id', auth, multer, sauceCtrl.modifySauce);
sauceRouter.delete('/:id', auth, sauceCtrl.deleteSauce);
sauceRouter.post('/:id/like', auth,  sauceCtrl.likeSauce);

module.exports = sauceRouter;