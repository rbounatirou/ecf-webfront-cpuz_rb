class Db{
    static async fetchData(source){
        let data = await fetch(source);
        return await data.json();
    }
}

export { Db };