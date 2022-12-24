import nc from 'next-connect';
import {
    getStories
} from '../../controller/storiesController';


const handler = nc()
handler.get(getStories)


export default handler