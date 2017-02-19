/*
 * 名称或别名可作为grunt命令的参数，例如：
 * grunt home
 * grunt fp
 *
 * grunt index
 * grunt presents
 * grunt integration
 * grunt policy
 * grunt familyrisk
 * grunt orders
 * grunt financialProducts
 * grunt autorenewal
 * grunt communication
 * grunt quicklogin
 * grunt gumui
 * grunt wxClaim
 */
module.exports = function(name) {
    /* 任务别名 */
    var alias = {
        fam: 'familyrisk',
        home: 'insuranceHome',
        fp: 'financialproducts',
        fn: 'financial_news',
        cff: 'financing_fy5app',
        fy5: 'financing_fy5',
        fy5thirdparty:'financing_fuying5thirdparty',
        fy7: 'financing_fy7',
        flanding: 'financing_landing',
        eva: 'financing_evaluation',
        news: 'financing_news',
        pwd: 'financing_pwd',
        password: 'financing_password',
        account: 'financing_account',
        assets: 'financing_assets',
        validate: 'financing_validate',
        twoStepValidate:'financing_twoStepValidate',
        hass:'health_archives_service_stop_tips',
        ma: 'myassets',
        gum_ui: 'gumui',
        examples: 'gumuiexamples',
        acc: 'account',
        cf: 'currencyfounds',
        ua: 'uobaccount',
        uf: 'uobfunds',
        pa: 'pension_apply',
        pj: 'pension_join',
        pl: 'pension_leave',
        pc: 'pension_confirm',
        pp: 'pension_progress',
        pt: 'pension_tax',
        po: 'pension_optional',
        fxp: 'flexible_plan',
        ci: 'criticalIllness',
        apk: 'activities_healthpk',
        rem: 'reimbursementApply',
        reim: 'nonlocalReim',
        ic: 'insurance_common',
        ipi: 'insurance_policyInquiry',
        sz: 'szinsurance_c2',
        sm: 'serviceManual',
        szip: 'szinsurance_presents',
        cs: 'customer_service',
        fji: 'fjInsurance',
        nbi: 'nbInsurance',
        img: 'imgUpload',
        pho: 'physical_optional',
        pov: 'pension_overview',
        pac: 'pension_applyAndConfirm',
        fof: 'financing_fof',
        store: 'entry_store',
        mid: 'activity_Midautumn',
        bill:'activity_Billrecharg',
        entryOrders: 'entry_orders',
        iai: 'insurance_addInsurance',
        ncs:'new_customer_service',
        auto:'financing_autocar'
    };
    if (alias[name]) {
        name = alias[name];
    }
    /* 默认直接使用名称查找任务文件 */
    return 'task/gruntfile_' + name + '.js';
}
