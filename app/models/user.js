const db = require('@database/mysql');
const hashService = require('@services/hashService');

exports.findAll = async (columns = []) => {
    const sqlColumns = columns.length > 0 ? columns.join(',') : '*';
    //[id,full_name] => [id,full_name]
    const [rows,fields] = await db.query(`
        SELECT ${sqlColumns} 
        FROM users 
    `);
    return rows;
};
exports.create = async (userData) => {
    const hashedPassword = hashService.hashPassword(userData.password);
    const updatedUserData = {...userData, password: hashedPassword };
    const [result] = await db.query(`INSERT INTO users SET ?`, [updatedUserData]);
    return result.insertId;
};

