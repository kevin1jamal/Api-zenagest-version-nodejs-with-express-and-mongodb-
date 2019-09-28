const mongoose = require('mongoose');

class Produitrepository {
   constructor(){}

enregistrer(produit){

       console.log('enregistrement du nouveau produit');
       produit.save().then();
   }

    modifier(id,jam) {

      //const res = await jam.save().then();

      return mongoose.model('produits').findByIdAndUpdate(id,jam).then(function (res) {

          console.log("modification vzlider")
      }).catch(function (err) {
        console.log(err)
      })



   }

   //afficher par id
    async afficherParId(id) {
        let result =await  mongoose.model('produits')
            .findById(id)
            .exec();
        console.log(id);

        return result;
    }

    supprimerParId(id) {
        console.log(id + " <=id ");
        mongoose.model('produits').deleteOne({"_id" : id}).then((result)=>{
            console.log('ok deleted');
        }).catch((err)=>{
            console.log(err);
        });
    }
//fonction qui retourne tous les produit
    async affichertous() {
        let result =await  mongoose.model('produits')
            .find()
            .limit(100)
            .exec();
        console.log(result);
        return result;
    }
}
module.exports =Produitrepository;