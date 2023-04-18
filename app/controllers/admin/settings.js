const settingModel = require('@models/setting');

exports.index = async (req, res) => {
    const settings = await settingModel.findAll();
    const presentedSettings = {};
    settings.forEach(item => {
        presentedSettings[item.setting_name] = item.setting_value;
    });
    res.render('admin/settings/index', {layout:'admin', config: presentedSettings, helpers:{
            isChecked: function (value, options) {
                return parseInt(value) === 1 ? options.fn(this) : options.inverse(this);
            },
        }});
};

exports.store = async (req, res) => {
    const settings = req.body;
    const validatedSettings = {};
    Object.keys(settings).forEach(setting_name => {
        if(settings[setting_name] === 'on'){
            validatedSettings[setting_name] = 1;
        }else {
            validatedSettings[setting_name] = settings[setting_name];
        }
    });
    const result = await settingModel.update(validatedSettings);
    res.redirect('/admin/settings');
};

