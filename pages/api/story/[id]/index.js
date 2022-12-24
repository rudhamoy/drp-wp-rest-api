import nc from 'next-connect';
import {
    getSingleStories
} from '../../../../controller/singleStoryController';


const handler = nc();

handler.get(getSingleStories)

export default handler