import Taro, { Component } from '@tarojs/taro'
import { View, OpenData, Image, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import IconBean from '../../assets/icon_bean.png'
import ImgHuahuaka from '../../assets/img_huahuaka.png'

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
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index-root'>
        <View className='header-info' >
          header-info
        </View>

        <View className='main-container'>
          <Image className='img' src={ImgHuahuaka} />
        </View>


        <View className='footer-info'>
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
          <Button className='money-btn'>充值</Button>
        </View>
      </View>
    )
  }
}

export default Index
