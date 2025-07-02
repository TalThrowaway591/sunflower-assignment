import { AppResponse } from "../types";
import { Request, Response } from "express";

const updateScoreQuery = (accountId: string, score: number) => `
    UPDATE account_scores
    SET value=${score}
    WHERE account_id='${accountId}'
`;

const findAccountQuery = (accountId: string) => `SELECT * from accounts WHERE id='${accountId}'`

const updateScoreHandler = async (req: Request, res: Response<AppResponse>) => {
    const { accountId } = req.params;
    const { score } = req.body;

    // check if accountId exists
    try {
        const queryRes = await req.appProfile.postgresQuery(findAccountQuery(accountId as string));

        if (!queryRes.rows.length) {
            res.status(400).send({ success: false, body: 'Account doesn\'t exist.' })

            return;
        }
    } catch (e) {
        console.log(e)

        res.status(500).send({ success: false, body: 'An error occured during DB query.' })

        return;
    }

    // after validating account existance
    try {
        await req.appProfile.postgresQuery(updateScoreQuery(accountId as string, score));

        res.send({ success: true, body: null })
    } catch (e) {
        console.log(e)

        res.status(500).send({ success: false, body: 'An error occured during DB query. (2)' })

        return;
    }

}

export { updateScoreHandler }