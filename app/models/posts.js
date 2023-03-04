const db = require('../../database/mysql');

exports.findAll = async () => {
    const [rows,fields] = await db.query(`
        SELECT p.*,u.full_name 
        FROM posts p
        JOIN users u ON p.author_id=u.id
        ORDER BY p.created_at DESC
    `);
    return rows;
};

exports.create = async (postData) => {
    const [result] = await db.query(`INSERT INTO posts SET ?`, [postData]);
    return result.insertId;
};