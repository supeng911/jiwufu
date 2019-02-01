import Taro from '@tarojs/taro'

const APPID = 'wx786f4d56d9bb77ca'
const MCH_ID = '1525617251'
const DEVICE_INFO = 'huahuaka-weapp'
const TRADE_TYPE = 'JSAPI'

// 获取 openId
async function getOpenId() {
  const res = await Taro.login()

  if(res && res.code) {
    return res.code
  } else {
    Taro.showToast({
      title: '登陆失败',
      icon: 'none',
      duration: 2000
    })
    return null
  }

}

// 生成商户订单
async function makeOrder({money}) {
  // 小程序ID
  const appid = 'wx786f4d56d9bb77ca'

  // 商户号
  const mch_id = '1525617251'

  // nonce_str
  const nonce_str = 'miguomama' // TODO

  // 签名
  const sign = '' // TODO

  // 商品描述
  const body = `花花卡充值 - ${money}`

  // 商户订单号
  const out_trade_no = Date.parse(new Date())

  // 订单金额
  const total_fee = money * 100;

  // 终端IP
  const spbill_create_ip = '127.0.0.1'

  // 通知地址
  const notify_url = 'https://api.vbao199.com/payed'

  // 交易类型
  const trade_type = 'JSAPI'

  console.log('out_trade_no', total_fee)
}

async function payment(money) {
  const openId = await getOpenId();

  const orderId = makeOrder({money});


  console.log('do payment', money)
}


export default payment
