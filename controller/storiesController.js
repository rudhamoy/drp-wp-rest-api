import {
    executeQuery
} from '../services/mysql_db';


const getStories = async (req, res) => {
    let stories = await executeQuery('select * from wp_posts', []);
    res.send(stories);
}

export {
    getStories
}