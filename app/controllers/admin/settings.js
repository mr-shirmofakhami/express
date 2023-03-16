const settingModel = require('@models/setting');

exports.index = async (req, res) => {
    const settings = await settingModel.findAll();
    res.render('admin/settings/index', {layout:'admin', config:settings});
};

