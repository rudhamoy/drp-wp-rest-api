import {
    executeQuery
} from '../services/mysql_db';


const getSingleStories = async (req, res) => {
    const slug = req.query.id.toString();
    let stories = await executeQuery(`SELECT * FROM wp_posts WHERE post_status='publish' AND post_name="${slug}"`, []);
    res.send(stories);
}


export {
    getSingleStories,
}