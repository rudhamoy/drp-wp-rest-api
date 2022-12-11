import nc from 'next-connect';
import {
    getStories
} from '../../controller/storiesController';


const handler = nc()
handler.get(getStories)
// export default function handler(req, res) {
//     res.status(200).json({
//         name: 'John Doe'
//     })
// }

export default handler