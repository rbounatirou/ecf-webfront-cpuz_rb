import { CPUCollection } from "./CPUS/CpuCollection.js";
import {CPUGenerateTable} from './CPUS/CPUGenerateTable.js';

let cpucoll = new CPUCollection();
let cputable = new CPUGenerateTable(cpucoll);
let priceOrderAsc = true;

/* ELEMENT IMPOTANT A IDENTIFIER */
let searchBar = document.querySelector('#searchbar');
let priceColumn =document.querySelector('#priceColumn');
let spanNbElement = document.querySelector('#nombreElement');

await cpucoll.load();
cputable.generateTBody();
setCount();

/* AJOUT D'UNE METHODE DELEGUE AU CHANGEMENT D'ETAT DE LA COLLECTION */
cpucoll.onChange.push(()=>{
    setCount();
});

/* EVENT LISTENER */

searchBar.addEventListener('input', e=>{
    cpucoll.searchByCPUFullName(e.target.value);
});

priceColumn.addEventListener('click', e=>{
    console.log("ok");
    cpucoll.sortByPrice(priceOrderAsc);
    priceOrderAsc = !priceOrderAsc;
    AddPriceColumnInfo();
})

/* AUTRES FONCTIONS */

function setCount(){
    let el = spanNbElement;
    el.innerText = cpucoll.filtersData.length;
}

function AddPriceColumnInfo(){
    priceColumn.innerText = 'Prix ' + (priceOrderAsc ? '⤴' : '⤵');
}

