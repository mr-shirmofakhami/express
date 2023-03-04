const db = require('../../database/mysql');
exports.totalUsers = async () => {
    const [result] = await db.query('SELECT COUNT(id) totalUsers FROM users')
    return result[0].totalUsers;
};
exports.totalComments = async () => {
    const [result] = await db.query('SELECT COUNT(id) totalComments FROM comments')
    return result[0].totalComments;
};
exports.totalPosts = async () => {
    const [result] = await db.query('SELECT COUNT(id) totalPosts FROM Posts')
    return result[0].totalPosts;
};
exports.totalViews = async () => {
    const [result] = await db.query('SELECT SUM(views) totalViews FROM Posts')
    return result[0].totalViews;
};