const postModel = require('@models/posts');
const userModel = require('@models/user');
const dateService = require('@services/dateService');
const langService = require('@services/langService');
const {lang} = require("jalali-moment");
const postValidator = require('@validators/post');
exports.index = async (req, res) => {
    const posts = await postModel.findAll();
    const presentedPosts = posts.map(post => {
        post.jalali_created_at = langService.toPersianNumbers(dateService.toPersianDate(post.created_at));
        post.persian_views =langService.toPersianNumbers(post.views);
        return post;
    });
    res.render('admin/posts/index', {layout:'admin', posts: presentedPosts});
};

exports.create = async (req, res) => {
    const users = await userModel.findAll(['id','full_name']);
    res.render('admin/posts/create', {layout: 'admin', users});
};
exports.store = async (req, res) => {

    let hasError = false;
    const postData = {
        title: req.body.title,
        author_id: req.body.author,
        slug: req.body.slug,
        content: req.body.content,
        status: req.body.status
    };
    const errors = postValidator.create(postData);
    if(errors.length > 0) {
        const users = await userModel.findAll(['id','full_name']);
        return res.render('admin/posts/create', {layout: 'admin', users, errors, hasError: errors.length > 0});
    }
        const insertId = await postModel.create(postData);
        if(insertId){
            res.redirect('/admin/posts');
        }
};