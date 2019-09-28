var express = require('express');
var router = express.Router();

let produitController = require('../Controller/Produit');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*add produit */

router.post('/add',produitController.ajouter);
router.get('/afficher',produitController.afficher);
router.get('/aff/:id', produitController.afficherParId);
router.post('/modifier/:id', produitController.AjouterStock);
router.post('/vendre/:id', produitController.vendre);
router.delete('/supprimer/:id', produitController.supprimer);


module.exports = router;
