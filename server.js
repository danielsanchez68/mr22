import express from 'express'
import RouterProductos from './router/productos.js'


class Server {
    #port = null
    #routerProductos = null

    constructor(port) {
        this.#port = port
        this.#routerProductos = new RouterProductos().config()
    }

    start() {
        const app = express()
        
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))

        //Servicio de recursos estáticos (recursos de Frontend)
        app.use(express.static('public'))

        /* -------------------------------- */
        /*      API RESTful: productos      */
        /* -------------------------------- */
        app.use('/api/productos', this.#routerProductos)

        const port = this.#port
        const server = app.listen(port, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${port}`))
        server.on('error', error => console.log(`Error en servidor ${error.message}`))
    }
}

export default Server

