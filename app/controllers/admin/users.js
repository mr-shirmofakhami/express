const userModel = require('@models/user');

exports.index = async (req, res) => {
    const users = await userModel.findAll();

    res.render('admin/users/index', {layout:'admin', users});
};

exports.create = async (req, res) => {
    const users = await userModel.findAll(['id','full_name']);
    res.render('admin/users/create', {layout: 'admin', users});
};
exports.store = async (req, res) => {

    let hasError = false;
    const userData = {
        full_name: req.body.full_name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    };

    const insertId = await userModel.create(userData);
    if(insertId){
        // req.flash('success', 'کاربر جدید با موفقیت ایجاد شد');
        res.redirect('/admin/users');
    }
};

exports.remove = async (req, res) => {
    const userID = req.params.userID;
    if(parseInt(userID) === 0) {
        res.redirect('/admin/users');
    }
    const result = await userModel.delete(userID);
    res.redirect('/admin/users');
};

exports.edit = async (req, res) => {
    const userID = req.params.userID;
    if(parseInt(userID) === 0) {
        res.redirect('/admin/users');
    }
    const user = await userModel.find(userID);
    const users = await userModel.findAll(['id','full_name']);
    res.render('admin/users/edit', {layout: 'admin', users, user, userStatus: statuses(), helpers: {
            isuserAuthor: function (userId, options) {
                return user.author_id === userId ? options.fn(this) : options.inverse(this);
            },
            isSelectedStatus: function (status, options) {
                return user.status === status ? options.fn(this) : options.inverse(this);
            }
        }});
};
exports.update = async (req, res) => {
    const userID = req.params.userID;
    if(parseInt(userID) === 0) {
        res.redirect('/admin/users');
    }
    const userData = {
        title: req.body.title,
        author_id: req.body.author,
        slug: req.body.slug,
        content: req.body.content,
        status: req.body.status
    };
    const result = await userModel.update(userID, userData);
    return res.redirect('/admin/users');
};