class CPU{
    constructor(props){
        Object.assign(this,props);
        this.fullName = this.generateFullName();
    }

    getKeys(){
        return Object.keys(this);
    }

    getValues(){
        return Object.values(this);
    }

    /**
     * @returns Nom complet du CPU
     */
    generateFullName(){
        return this.brand + ' ' + this.family + ' ' + this.model;
    }
}

export { CPU };