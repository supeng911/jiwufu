import Taro, { Component } from '@tarojs/taro'
import { View, OpenData, Image, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import classnames from 'classnames'
import ImgTitle from '../../assets/title.png'
import ImgHeader from '../../assets/header.png'
import IconBean from '../../assets/icon_bean.png'
import ImgHuahuaka from '../../assets/img_huahuaka.png'

import ImgNotPrize from '../../assets/img_not_prize.png'
import ImgPrizeAgainBtn from '../../assets/img_prize_again.png'
import ImgNeedShare from '../../assets/img_need_share.png'


// utils

import './index.less'



@connect(state => {
  return {
    beanCount: state.beans.count
  }
})
class Index extends Component {

  config = {
    disableScroll: true,
    navigationBarTextStyle: "white",
    navigationStyle: 'custom'
  }

  state = {
    backgroundAudioManager: null,
    showMask: false,
    showPayment: false,
    showNotPrize: false,
    showNeedShare: false,
  }

  // 设置分享
  onShareAppMessage() {
    this.setState({showMask: false, showNeedShare: false})
    this.props.dispatch({
      type: 'beans/addCount'
    })

    return {
      title: '你的朋友送了你一张······[五福·花花卡]',
      path: '/pages/index/index',
      imageUrl: "https://file.vbao100.com/weapp/cover.png"
    }
  }

  componentDidMount() {
    // 初始化豆子数量
    this.props.dispatch({
      type: 'beans/fetch'
    })
  }


  componentDidShow () {
    // let {backgroundAudioManager} = this.state
    // if(!backgroundAudioManager) {
    //   backgroundAudioManager = Taro.getBackgroundAudioManager()
    //   this.setState({backgroundAudioManager})
    // }
    // backgroundAudioManager.src = 'https://file.vbao100.com/weapp/background.mp3'
    // backgroundAudioManager.title = '背景音乐'
    // // backgroundAudioManager.play()
    // console.log('componentDidShow')
  }

  componentDidHide () {
    if(this.state.backgroundAudioManager) {
      // this.state.backgroundAudioManager.stop()
    }
  }


  // 显示未中奖
  handleShowPrize = () => {
    const {beanCount} = this.props

    console.log('hll', beanCount)

    if(beanCount >= 1000) {
      // 减掉豆子
      this.props.dispatch({type:'beans/subCount'})
      this.setState({showMask: true, showNotPrize: true})
    } else {
      // 显示分享
      this.setState({showMask: true, showNeedShare: true})
    }

  }

  handleCloseAll = () => {
    this.setState({showMask: false, showPayment: false, showNotPrize: false})
  }

  handlePayment = (moeny, e) => {
    // FIXME
    console.log('show moeny', moeny)
  }

  render () {
    const {beanCount} = this.props

    return (
      <View className='main-root'>
        <View className='title'>
          <Image src={ImgTitle}/>
        </View>
        <View className='container'>
          <View className='top-info'>
            <Image className='top-img' src={ImgHeader}/>
            {/*<View className='top-img' />*/}
          </View>
          <View className='center-info'>
            <Image className='huahuaka-img' src={ImgHuahuaka} onClick={this.handleShowPrize} />
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
                    <Text>{beanCount}</Text>
                  </View>
                </View>
              </View>
              <Button className='money-btn' openType='share'>分享得1000豆</Button>
            </View>
          </View>
        </View>

        <View className={classnames('mask', {show: this.state.showMask})} />

        {/*
        <View className={classnames('payment-root', {show: this.state.showPayment})}>
          <Image className='pay_bg' src={ImgPayBackground} />
          <Image className='icon-close' src={IconClose} onClick={this.handleCloseAll} />
          <View className='pay pay_6' onClick={this.handlePayment.bind(this, 6)} ><Image src={PayImg6} /></View>
          <View className='pay pay_30' onClick={this.handlePayment.bind(this, 30)}><Image src={PayImg30} /></View>
          <View className='pay pay_68' onClick={this.handlePayment.bind(this, 68)}><Image src={PayImg68} /></View>
          <View className='pay pay_168' onClick={this.handlePayment.bind(this, 168)}><Image src={PayImg168} /></View>
        </View>
        */}

        {/*未中奖*/}
        <View className={classnames('no-prize', {show: this.state.showNotPrize})}>
          <Image className='img-not-prize' src={ImgNotPrize} />
          <Image className='img-again-btn' src={ImgPrizeAgainBtn} onClick={this.handleCloseAll} />
        </View>

        <View className={classnames('share-pop', {show: this.state.showNeedShare})}>
          <Button className='img-need-share-btn' openType='share' >
            <Image className='img-need-share-bg' src={ImgNeedShare} />
          </Button>
        </View>

      </View>
    )
  }
}

export default Index
