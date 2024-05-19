import { Sequelize, Model } from 'sequelize'
import * as dotenv from 'dotenv'
dotenv.config()

const env = (process.env.NODE_ENV) ? `.env.${process.env.NODE_ENV}` : `.env`
dotenv.config({ path: `./environment/${env}`})

const opts = {
    define: {}
}

// const database = new Sequelize('postgres://postgres:root@localhost:5432/admin_web', opts)
    const database = new Sequelize(process.env['DB_CONNECT'], opts)
    console.log("connection to data base",database.getDatabaseName());

export { database, Model }