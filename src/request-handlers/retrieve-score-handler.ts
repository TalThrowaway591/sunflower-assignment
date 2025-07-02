import { Request, Response } from "express";
import { AppResponse } from "../types";

const query = (accountId: string) => `
    WITH ranked_users AS (
    SELECT
        account_id,
        value,
        RANK() OVER (ORDER BY value DESC) AS rank
    FROM account_scores
    )
    SELECT
    ru.rank,
    a.id,
    a.username,
    ru.value
    FROM ranked_users ru
    JOIN accounts a ON a.id = ru.account_id
    WHERE ru.rank BETWEEN (
        SELECT rank FROM ranked_users WHERE account_id = '${accountId}'
    ) - 5 AND (
        SELECT rank FROM ranked_users WHERE account_id = '${accountId}'
    ) + 5
    ORDER BY ru.rank;
`


const retrieveScoreHandler = async (req: Request, res: Response<AppResponse>) => {
    const { accountId } = req.params;

    try {
        const queryRes = await req.appProfile.postgresQuery(query(accountId));

        res.status(200).send({ success: true, body: queryRes.rows })
    } catch (e) {
        console.log(e)
        res.status(500).send({ success: false, body: 'An error occured during data fetching.' })
    }

}

export { retrieveScoreHandler }