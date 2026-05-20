//https://github.com/hapijs/joi
//https://www.npmjs.com/package/joi
//https://joi.dev/
import Joi from 'joi';

class Producto {
    constructor({nombre, precio, stock}) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }

    /* validar() {
        if(!this.nombre) {
            throw new Error('Nombre requerido')
        }
        if(this.precio <= 0) {
            throw new Error('Precio no válido')
        }
    } */

    validar() {
        const schema = Joi.object({
            nombre: Joi.string().alphanum().required(),
            precio: Joi.number().min(0).max(1000000).required(),
            stock: Joi.number().integer().min(0).max(999).required(),
        });

        const { error } = schema.validate({
            nombre: this.nombre,
            precio: this.precio,
            stock: this.stock
        });
        //console.log(error, value)
        if(error) {
            throw new Error(error)
        }
    }        

    get() {
        return {
            nombre: this.nombre,
            precio: +this.precio,
            stock: parseInt(this.stock)
        }
    }
}

export default Producto