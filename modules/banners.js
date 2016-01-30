

const REQUEST = 'qbao/banners/REQUEST';
const RECEIVE = 'qbao/banners/RECEIVE';

//改变 State 只能通过向 Reducer dispatch actions 来完成
export default function reducer(state = {
  isFetching: false,
  list: []
}, action = {}) {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        list: []
      });
    case RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        list: action.list
      });
    default:
      return state;
  }
};

//action
export function requestBanners() {
  return {
    type: REQUEST
  };
}

//action
export function receiveBanners(json) {
  return {
    type: RECEIVE,
    list: json.data.data[0].picDtoList
  };
}

//action触发
export function fetchBanners() {
  return (dispatch, getState) => {
    dispatch(requestBanners());
    return fetch('http://m.qbao.com/api/v34/merchant4Client/act/listContent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        tId: 41,
        sId: 1
      })
    })
    .then(resp => resp.json())
    .then(json => dispatch(receiveBanners(json)));
  };
};
