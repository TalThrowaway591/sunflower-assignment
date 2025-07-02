import { Request, Response } from "express";
import { AppResponse } from "../types";

const insertScoreQuery = (accountId: string, score: number) => `
    INSERT INTO account_scores (account_id, value)
    VALUES ('${accountId}', ${score});`

const insertAccountQuery = (accountId: string) => `
    INSERT INTO accounts (id, username)
    VALUES ('${accountId}', '${createRandomUsername()}');`


const findAccountQuery = (accountId: string) => `SELECT * from accounts WHERE id='${accountId}'`

// for debugging purposes
const createRandomUsername = (): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

}

const createScoreHandler = async (req: Request, res: Response<AppResponse>) => {
    const { accountId, score } = req.body;

    // check if account exists 
    // (commented out so tester can safely create scores without manually creating accounts)
    try {
        const queryRes = await req.appProfile.postgresQuery(findAccountQuery(accountId));

        if (!queryRes.rows.length) {
            // res.status(400).send({ success: false, body: 'Account doesn\'t exist.' })

            await req.appProfile.postgresQuery(insertAccountQuery(accountId));
        }
    } catch (e) {
        console.log(e)

        res.status(500).send({ success: false, body: 'An error occured during DB query.' })

        return;
    }

    // insert new score
    try {
        await req.appProfile.postgresQuery(insertScoreQuery(accountId, score));

        res.status(200).send({ success: true, body: null })

    } catch (e) {
        console.log(e)

        res.status(500).send({ success: false, body: 'An error occured during DB query. (2)' })

        return;
    }

}

export { createScoreHandler }