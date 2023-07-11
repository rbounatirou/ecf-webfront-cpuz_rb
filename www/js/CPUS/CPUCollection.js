import { Db } from "../Db.js";
import { CPU } from "./CPU.js";

class CPUCollection{
    constructor(){
        this.data = []; // Collection des données
        this.filtersData = []; // Donnée filtrées
        this.onChange = []; // Collections des méthodes déléguées au changement d'etat de la collection
    }

    // CHARGEMENT DES DONEES DANS LA COLLECTION DATA DE LA CLASSE
    async load(){
        let json = await Db.fetchData('./cpuz.json');
        this.data = json.map(d=>new CPU(d));
        this.filtersData = this.data;
    }

    /**
     * Tri les CPU de la collection selon leur prix,
     * le booleeen orderASC indique l'ordre,
     * si true (par défaut) tri croissant,
     * si false tri décroissant
     * @param {Boolean} orderASC 
     */
    sortByPrice(orderASC = true){
        this.data.sort((a,b) => a.price - b.price);
        this.filtersData.sort((a,b) => a.price - b.price); // TRI PAR ORDRE CROISSANT
        if(!orderASC){
            this.filtersData.reverse();
        }
        // --
        this.onChange.forEach(d=>d()); // APPEL AUX METHODES DELEGUES AUX CHANGEMENTS
    }

    searchByCPUFullName(lfFullName){
        this.filtersData = this.data.filter(d=> d.fullName.toLowerCase().includes(lfFullName.toLowerCase()));
        this.onChange.forEach(d=>d()); // APPEL AUX METHODES DELEGUES AUX CHANGEMENTS
    }
}

export { CPUCollection };