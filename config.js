import dotenv from 'dotenv'

dotenv.config({quiet: true})

//console.log('process.env', process.env)

const PORT = 8080
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || ''

export default {
    PORT,   // es igual a -> PORT: PORT
    MODO_PERSISTENCIA,
}