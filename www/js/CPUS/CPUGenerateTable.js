import { CPUCollection } from "./CpuCollection.js";
import { CPU } from './CPU.js';


class CPUGenerateTable{
    constructor(_cpucollection){
        this.CPUCollection = _cpucollection;   // REPRESENTE LA COLLECTION DE CPU AVEC LAQUELLE LA CLASSE GENERE LE TABLEAU
        
        this.CPUCollection.onChange.push(()=>this.generateTBody()); // ON AJOUTE UNE METHODE AU DELEGUEE DE LA CLASSE EN CAS DE CHANGEMENT ON ACTUALISE L'AFFICHAGE
    
        this.tbody = document.querySelector('#tablebody');
        this.tfoot = document.querySelector('#tablefoot');

    }

    /**
     * Genere le tbody du tableau
     * @returns 
     */
    generateTBody(){
        this.tbody.innerHTML = '';
        this.CPUCollection.filtersData.forEach(d=>{
            let tr = this.generateRow(d);
            this.tbody.appendChild(tr);
        })
    }

    /**
     * Genere une ligne en prenant en parametre la doneee d'entree
     * @param {CPU} data 
     */
    generateRow(data){
        let tr = document.createElement('tr');
        data.getValues().forEach(d=>{
            let td = this.generateCell(d);
            tr.appendChild(td);
        })
        return tr;
    }

    /**
     * Genere une ligne en prenant en parametre la doneee d'entree
     * @param {CPU} data 
     */
     generateHeaderRow(data){
        let tr = document.createElement('tr');
        data.getKeys.forEach(d=>{
            let th = this.generateCell(data[d],'th');
            tr.appendChild(th);
        })
        return tr;
    }

    /**
     * Genere un element du type de balise en paramètre type (par défaut td)
     * et y ajoute le contenu du parametre value
     */
    generateCell(value, type='td'){
        let el = document.createElement(type);
        el.innerText = value;
        return el;
    }
    
    
}

export {CPUGenerateTable};