var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'test',
    user: 'root',
    password: ''
});

pool.getConnection(function (err, connection) {
    if (err) throw err; // not connected!

    // Use the connection
    console.log("THE CONNECTION IS SUCCESFULL ..................-------------->>>>>>>>>>>>>>>>>$$$$$$$$$$4")
    connection.query('SELECT * FROM wp_posts', function (error, results, fields) {
        // When done with the connection, release it.
        connection.release();

        // Handle error after the release.
        if (error) throw error;

        // Don't use the connection here, it has been returned to the pool.
    });
});


const executeQuery = (query, arrParams) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arrParams, (err, data) => {
                if (err) {
                    console.log("Error in executeQuery")
                    reject(err)
                }
                resolve(data);
            })
        } catch (err) {
            reject(err)
        }
    })
}

module.exports = {
    executeQuery
};