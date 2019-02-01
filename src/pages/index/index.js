import Taro, { Component } from '@tarojs/taro'
import { View, OpenData, Image, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import classnames from 'classnames'
import IconBean from '../../assets/icon_bean.png'
import ImgHuahuaka from '../../assets/img_huahuaka.png'
import ImgPayBackground from '../../assets/img_pay_background.png'
// pay
import PayImg6 from '../../assets/pay-img-6.png'
import PayImg30 from '../../assets/pay-img-30.png'
import PayImg68 from '../../assets/pay-img-68.png'
import PayImg168 from '../../assets/pay-img-168.png'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  config = {
    disableScroll: true,
    navigationBarTextStyle: "white",
    navigationStyle: 'custom'
  }

  state = {
    beansNum: 1000,
    showMask: false,
    showPayment: false,
  }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () {
    // const backgroundAudioManager = Taro.getBackgroundAudioManager()
    // backgroundAudioManager.src = 'https://file.vbao100.com/weapp/background.mp3'
    // backgroundAudioManager.title = '背景音乐'
    // backgroundAudioManager.play()
    // console.log('componentDidShow')
  }

  componentDidHide () { }

  handleShowPayment = () => {
    this.setState({showMask: true, showPayment: true})
  }

  render () {
    return (
      <View className='main-root'>
        <View className='title'>this is title</View>
        <View className='container'>
          <View className='top-info'><View className='top-img' /></View>
          <View className='center-info'>
            <Image className='huahuaka-img' src={ImgHuahuaka} />
          </View>
          <View className='footer-info'>
            <View className='bottom-container'>
              <View className='my-info'>
                <View className='my-face' >
                  <OpenData className='open-data-face' type='userAvatarUrl' />
                </View>
                <View className='my-nick-name'>
                  <OpenData className='name' type='userNickName' />
                  <View className='num'>
                    <Image className='bean' src={IconBean} />
                    <Text>{this.state.beansNum}</Text>
                  </View>
                </View>
              </View>
              <Button className='money-btn' onClick={this.handleShowPayment}>充值</Button>
            </View>
          </View>
        </View>


        <View className={classnames('mask', {show: this.state.showMask})} />

        <View className={classnames('payment-root', {show: this.state.showPayment})}>
          <Image className='pay_bg' src={ImgPayBackground} />
          <View className='pay pay_6' ><Image src={PayImg6} /></View>
          <View className='pay pay_30' ><Image src={PayImg30} /></View>
          <View className='pay pay_68' ><Image src={PayImg68} /></View>
          <View className='pay pay_168' ><Image src={PayImg168} /></View>
        </View>


      </View>
    )
  }
}

export default Index
