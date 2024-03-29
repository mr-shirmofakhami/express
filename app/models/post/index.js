const db = require('@database/mysql');

exports.find = async (postID) => {
    const [rows,fields] = await db.query(`
        SELECT p.*,u.full_name 
        FROM posts p
        JOIN users u ON p.author_id=u.id
        WHERE p.id=? LIMIT 1
    `,[postID]);
    return rows.length > 0 ? rows[0] : false;
};

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

exports.delete = async (postID) => {
    const [result] = await db.query(`DELETE FROM posts WHERE id=?`, [postID]);
    console.log(result);
    return result.affectedRows > 0;
};

exports.update = async (postID, updateFields) => {
    const [result] = await db.query(`UPDATE posts SET ? WHERE id=? LIMIT 1`, [updateFields, postID]);
    console.log(result);
    return result.affectedRows > 0;
};