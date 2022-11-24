import {NextApiRequest, NextApiResponse} from 'next'
import db from "@database";

const oneAvo  = async (req: NextApiRequest, res: NextApiResponse) => {
    const {id} = req.query;
    const database = new db()

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify({data: await database.getById(id as string)}))
}

export default oneAvo; 