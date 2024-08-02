const knex = require('knex')

const {PGHOST, PGPORT, PGUSER, PGDATABASE, PGPASSWORD} = process.env

const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
    }
})

module.exports = {
    db
}