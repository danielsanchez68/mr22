import ModeloFile from "./productosFile.js"
import ModeloMem from "./productosMem.js"
import ModeloMongoDB from "./productosMongoDB.js"

class ModelFactory {
    /* static get(tipo) {
        if(tipo == 'FILE') return new ModeloFile()
        else if(tipo == 'MONGODB') return new ModeloMongoDB()
        else return new ModeloMem()
    } */

    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log('**** Persistiendo en Memoria ****')
                return new ModeloMem()

            case 'FILE':
                console.log('**** Persistiendo en FileSystem ****')
                return new ModeloFile()
                
            case 'MONGODB':
                console.log('**** Persistiendo en MongoDB Database ****')
                return new ModeloMongoDB()

            default:
                console.log('**** Persistiendo en Memoria (default) ****')
                return new ModeloMem()
        }
    }        
}

export default ModelFactory