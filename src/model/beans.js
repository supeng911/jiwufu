import {getBeansCount, subBeansCount, addBeansCount} from '../utils/storage'

export default {
  namespace: 'beans',
  state: {
    count: 0,
  },
  reducers: {
    save(state, {payload}) {
      return {...state, ...payload};
    },
  },
  effects: {
    * fetch(_, { call, put}) {
      // 初始化 bean count
      const count = yield call(getBeansCount)
      yield put({
        type: 'save',
        payload: {count}
      })
    },

    * subCount(_, {call, put}) {
      const count = yield call(subBeansCount)
      yield put({
        type: 'save',
        payload: {count}
      })
    },

    * addCount(_, {call, put}) {
      const count = yield call(addBeansCount)
      yield put({
        type: 'save',
        payload: {count}
      })
    }
  },
};
