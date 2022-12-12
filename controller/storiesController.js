import {
    executeQuery
} from '../services/mysql_db';


const getStories = async (req, res) => {
    let stories = await executeQuery("SELECT * FROM wp_posts WHERE post_type='post' LIMIT 10", []);
    res.send(stories);
}

export {
    getStories
}