import { Commentaire } from "./comment";

export class Produits {
    constructor(
        public id:number,
        public categorie:String,
        public image:String,
        public libelle:String ,
        public details:String,
        public prix:number ,
        public comment:Commentaire[],
        public dispo:boolean ,
        public date_deposer:Date,
        public promo:boolean){}
}
