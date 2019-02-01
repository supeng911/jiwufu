import Taro from '@tarojs/taro'

const KEY = 'com.vbao100.huahuaka_bean_count'
const INIT_TAG = 'com.vbao100.huahuaka_is_init'

export function getBeansCount() {
  const initTag = Taro.getStorageSync(INIT_TAG)
  let count = Taro.getStorageSync(KEY)
  if(!initTag) {
    count = 1000;
    Taro.setStorageSync(INIT_TAG, true)
    Taro.setStorageSync(KEY, count)
  }
  return count
}

export function subBeansCount(count = 1000) {
  let storageCount = Taro.getStorageSync(KEY)
  if(storageCount > 0) {
    storageCount = storageCount - count
  } else {
    storageCount = 0
  }

  Taro.setStorageSync(KEY, storageCount)
  return storageCount
}

export async function addBeansCount(count = 1000) {
  let storageCount = Taro.getStorageSync(KEY)
  if(storageCount ) {
    storageCount = storageCount + count
  } else {
    storageCount = 1000
  }

  Taro.setStorageSync(KEY, storageCount)
  return storageCount
}


