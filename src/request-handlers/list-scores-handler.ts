import { Request, Response } from "express";
import { AppResponse } from "../types";

const query = (rowAmount: number) => `
    SELECT a.id, a.username, s.value
    FROM account_scores s 
    JOIN accounts a ON a.id = s.account_id
    ORDER BY s.value DESC
    LIMIT ${rowAmount};`

const listScoresHandler = async (req: Request, res: Response<AppResponse>) => {
    // TODO: separate business logic from web-server driver

    const { rowAmount } = req.query;

    const rowAmountNum = Number.parseInt(rowAmount as string)

    if (!rowAmount || Number.isNaN(rowAmountNum)) {
        res.status(400).send({ success: false, body: 'Invalid parameter for \'rowAmount\'.' })

        return;
    }

    try {
        const queryRes = await req.appProfile.postgresQuery(query(rowAmountNum));

        res.status(200).send({ success: true, body: queryRes.rows })
    } catch (e) {
        res.status(500).send({ success: false, body: 'An error occured during data fetching.' })
    }

}

export { listScoresHandler }