var mysql = require('mysql');
var pool = mysql.createPool({
    host: '164.92.71.201',
    port: 3306,
    database: 'wordpress',
    user: 'nikhilesh',
    password: 'Nikhilesh@123'
});

pool.getConnection(function (err, connection) {
    if (err) {
        console.log(err);
        throw err; // not connected!
    }

    // Use the connection
    console.log("THE CONNECTION TO 'mysql' IS SUCCESFULL----->>$$$$$$$$$$")

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