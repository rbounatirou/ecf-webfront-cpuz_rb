class Db{
    /*
    Recupere les informations d'une source passé en paramètre et les renvoie en json
    */
    static async fetchData(source){
        let data = await fetch(source);
        return await data.json();
    }
}

export { Db };