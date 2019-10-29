
let Repeat = localStorage.getItem('path');
//eslint-disable-next-line
let Reg = /(http\:\/\/|https\:\/\/|)(\d+\.){3}\d+\:\d+$/;

let Production = 'shop.api.meihaofenqi.com';
let Test = Reg.test(Repeat) ? Repeat : 'http://106.75.19.104:8085';
let path = window.location.host.indexOf(Production) !== -1 ? 'https://shop.api.meihaofenqi.com' : Test;
const API = {

    login:'/login2',
    debitApplyList:'/api/debit/apply/list.json',
    debitPayedList:'/api/debit/payed/list.json',
    repurchaseAddInit:'/api/repurchase/add-init.json',
    repurchaseAdd:'/api/repurchase/add.json',
    debitUploadPayVocherView:'/api/debit/upload-pay-voucher/view.json',
    repurchaseView:'/api/repurchase/view.json',
    repurchaseSupplementVocher:'/api/repurchase/supplement/voucher.json',
    exportDebitPayedExport:'/export/debit/payed-export',
    repurchaseCancel:'/api/repurchase/cancel.json',
    repurchasePreview:'/api/repurchase/preview.json',
    applyCheck: '/api/debit/audit.json' , // 申请件审查
    greenDown:'/api/debit/greenChannel/contract/download.json', //绿通下载 

    commonUploadImg:'/api/common/upload-img.json',
    debitUploadPayVoucherAdd:'/api/debit/upload-pay-voucher/add.json',

    refundList:'/api/shop/margin/return/list.json', // 回款列表
    refundSubmit: '/api/shop/margin/return/apply.json', //回款操作列表
    refunDetail: '/api/shop/margin/return/view.json', //汇款详情

    branchSearch: '/api/group-shop/get/sub-stores.json', //分店查询

    telLoginList: '/queryMobile', // 获取手机号码
    telSendCode: '/sms/send.json', // 发送验证码

    refundReconcile: '/api/shop/refund/list.json', // 反款对账
    refundDown: '/shopRefunded/download.json'  // 返款导出
   
}

Object.keys(API).forEach(key => {
    API[key] = path + API[key];
})

export default API
