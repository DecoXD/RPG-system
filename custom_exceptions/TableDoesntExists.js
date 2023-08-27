module.exports = class TableDoesntExists extends Error{
    constructor(tableName = ''){
        super('table '+ tableName + "Doesnt Exist")
        this.code =`ERR_TABLE_DOESNT_EXIST`
    }
    get name(){
        return this.code
    }
}