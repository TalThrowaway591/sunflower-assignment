import { Pool } from "pg";
import config from 'config'

const pool = new Pool({
    host: config.get('postgresql.host'),
    user: config.get('postgresql.user'),
    password: config.get('postgresql.password'),
    port: config.get('postgresql.port'),
    database: config.get('postgresql.database'),
});

const toExport = {
    query: (text: string, params: any) => pool.query(text, params)
}

export {
    toExport
};