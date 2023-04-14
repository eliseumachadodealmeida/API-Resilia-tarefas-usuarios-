import { resolve } from "path"
import db from "../infra/db.js"
import { rejects } from "assert"

class UsuarioDAO{
    static listar (){
        const query = "SELECT * FROM USUARIOS"
        return new Promise ((resolve,reject)=> {
            db.all(query, (err, rows) =>{
                if(err){
                    reject(err)
                }
                resolve(rows)
            })
        })
    }
}

export default UsuarioDAO