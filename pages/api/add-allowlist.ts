import type { NextApiRequest, NextApiResponse } from 'next'
import {table} from "../../utils/airtable";

// type Data = {
//     name: string
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { address } = JSON.parse(req.body)

    try {
        await table.create([
            {
                fields: {
                    Address: address
                }
            }
        ])

        res.status(200).json({
            success: true,
            message: 'User added to allow list'
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        })
    }
}