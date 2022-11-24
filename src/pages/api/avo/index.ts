import {IncomingMessage, ServerResponse} from "http";
import db from "@database";

const allAvo  = async (req: IncomingMessage, res: ServerResponse) => {
    const database = new db()
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({data: await database.getAll()}))
}



export default allAvo;