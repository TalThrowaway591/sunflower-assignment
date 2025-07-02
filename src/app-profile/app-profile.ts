import { Client } from 'pg';

type Config = {
    postgresqlClient: Client;
}

abstract class AppProfile {
    private readonly postgresqlClient: Client

    public constructor(config: Config) {
        this.postgresqlClient = config.postgresqlClient;
    }
}

export { AppProfile }
