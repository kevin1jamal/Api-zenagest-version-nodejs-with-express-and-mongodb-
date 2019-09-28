let ProduitRepository  = require('./../repository/Produitrepository');

let produitR = new ProduitRepository();

let ProduitModel = require('./../model/Produit');

let produitController ={} ;

produitController.ajouter = (req,res)=>{

    if(req.body.nom ==null && req.body.prix ==null){
        console.log('forulaire vide mon beau');
 res.send('pas possible le formulaire est vide');
    }else{
        console.log('debut du service ajouter');
        let prod = new ProduitModel({

            "nom": req.body.nom,
            "prix": req.body.prix,
            "stock" : req.body.stock,
        });
        produitR.enregistrer(prod);
        console.log('service lancer')
        res.send('reussit');
    }
}

produitController.afficher = (req,res)=> {
    produitR.affichertous().then((result) => {
      res.json({"message":200,"resultat":result});
    })

}
produitController.afficherParId = (req,res)=>{
console.log("je suis dedans")
    produitR.afficherParId(req.params.id).then((result)=>{
        console.log(req.params.id);
        res.json({"resultat":result});

    })
}

produitController.AjouterStock = (req,res)=>{
    console.log('noeud de modification')
   let pr
    let  mod

    mod = req.body.stock.toString() ;
    produitR.afficherParId(req.params.id).then((result)=>{
        console.log('noeud afficher by id')
        result.stock = req.body.stock;
        result=JSON.stringify(result);
        result= JSON.parse(result);
        console.log(result);
        console.log("rol");

        console.log(mod);

        console.log(result.stock);
      result.stock += parseInt(mod) ;
        console.log(result.stock)

        produitR.modifier(result._id,result);
res.send("tout est ok");
        console.log('apres modif');
    })




}
produitController.vendre =(req,res)=>{
    mod = req.body.stock.toString() ;
    produitR.afficherParId(req.params.id).then(function (result) {
        console.log('nouvelle vente')
        result.stock = req.body.stock;
        result=JSON.stringify(result);
        result= JSON.parse(result);
        if(result.stock >= parseInt(mod)){
            result.stock -= parseInt(mod);
            produitR.modifier(result._id,result)
            console.log('effectué ')
            res.send("nouvelle vente ok");
        }else{


            res.send("stock inferieur à la commande");
        }


    })



}

produitController.supprimer =(req,res)=>{

    console.log("debut de suppression");
let id = req.params.id ;
    produitR.supprimerParId(id);
    res.send("suppression effectué");

}

module.exports = produitController ;

