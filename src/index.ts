import 'dotenv/config'
import config from "config";
import { createServer } from './server';


const main = async () => {

    const PORT = config.get("web-server.port") || 80;

    const server = await createServer();

    server.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });
};

main();
