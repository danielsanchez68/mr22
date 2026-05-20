import Servicio from '../servicio/productos.js'


class Controlador {
    #servicio = null

    constructor() {
        this.#servicio = new Servicio()
    }

    obtenerProductos = async (req,res) => {
        try {
            const { id } = req.params
            const productos = await this.#servicio.obtenerProductos(id)
            res.json(productos)
        }
        catch(error) {
            res.status(500).json({ url: req.url, method: req.method, error: error.message })
        }
    }

    guardarProducto = async (req,res) => {
        try {
            const producto = req.body
            console.log(producto)
            
            if(Object.keys(producto).length == 0) throw new Error('El producto está vacío')
            const productoGuardado = await this.#servicio.guardarProducto(producto)
            res.json(productoGuardado)
        }
        catch(error) {
            res.status(500).json({ url: req.url, method: req.method, error: error.message })
        }
    }

    actualizarProducto = async (req,res) => {
        try {
            const { id } = req.params
            const producto = req.body
            const productoActualizado = await this.#servicio.actualizarProducto(id, producto)
            res.json(productoActualizado)
        }
        catch(error) {
            res.status(500).json({ url: req.url, method: req.method, error: error.message })
        }
    }

    borrarProducto = async (req,res) => {
        try {
            const { id } = req.params
            const productoEliminado = await this.#servicio.borrarProducto(id)
            res.json(productoEliminado)
        }
        catch(error) {
            res.status(500).json({ url: req.url, method: req.method, error: error.message })
        }        
    }

    obtenerPromedio = async (req,res) => {
        try {
            const promedio = await this.#servicio.obtenerPromedio()
            res.json({promedio})
        }
        catch(error) {
            res.status(500).json({ url: req.url, method: req.method, error: error.message })
        }        
    }
}

export default Controlador