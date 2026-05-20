import Producto from '../modelo/Producto.js'

/* import ModeloMem from '../modelo/DAO/productosMem.js'
import ModeloFile from '../modelo/DAO/productosFile.js'
import ModeloMongoDB from '../modelo/DAO/productosMongoDB.js' */
import ModelFactory from '../modelo/DAO/productosFactory.js'

import config from '../config.js'


class Servicio {
    #modelo = null

    constructor() {
        const modo = config.MODO_PERSISTENCIA
        
        /* if(modo == 'FILE') this.#modelo = new ModeloFile()
        else if(modo == 'MONGODB') this.#modelo = new ModeloMongoDB()
        else  this.#modelo = new ModeloMem() */

        this.#modelo = ModelFactory.get(modo)
    }

    obtenerProductos = async id => {
        if(id) {
            const producto = await this.#modelo.obtenerProducto(id)
            return producto
        }
        else {
            const productos = await this.#modelo.obtenerProductos()
            return productos
        }
    }

    guardarProducto = async producto => {
        const prod = new Producto(producto)
        //console.log(prod)
        prod.validar()

        const productoGuardado = await this.#modelo.guardarProducto(prod.get())
        return productoGuardado
    }

    actualizarProducto = async (id, producto) => {
        const productoActualizado = await this.#modelo.actualizarProducto(id, producto)
        return productoActualizado
    }

    borrarProducto = async id => {
        const productoEliminado = await this.#modelo.borrarProducto(id)
        return productoEliminado
    }

    obtenerPromedio = async () => {
        const productos = await this.#modelo.obtenerProductos()
        const sumatoria = productos.reduce((acc, p) => p.precio + acc, 0)
        const promedio = sumatoria / productos.length
        return Number(promedio.toFixed(2))
    }
}

export default Servicio
