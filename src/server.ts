import express, { Application, NextFunction, Request, Response } from 'express';
import * as requestHandlers from './request-handlers/index';
import { routes } from './routes';
import { toExport } from './db';

const registerDb = (app: Application) => {
    app.use((req: Request, res: Response, next: NextFunction) => {
        req.appProfile = {
            postgresQuery: toExport.query
        }
        next();
    })
}

const registerRequestHandlers = (app: Application) => {
    app.get(routes.scores.list, requestHandlers.listScoresHandler)
    app.get(routes.scores.retrieve, requestHandlers.retrieveScoreHandler)
    app.post(routes.scores.create, requestHandlers.createScoreHandler)
    app.patch(routes.scores.update, requestHandlers.updateScoreHandler)
}

const registerMiddlewares = (app: Application): Application => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    registerDb(app);

    return app;
};

const createServer = async (): Promise<Application> => {
    const app = express();

    registerMiddlewares(app);
    registerRequestHandlers(app);

    app.get('/', (req, res) => {
        res.send('hello world')
    })

    return app;
}

export { createServer }