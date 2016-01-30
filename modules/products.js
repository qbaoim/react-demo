const REQUEST = 'qbao/products/REQUEST';
const RECEIVE = 'qbao/products/RECEIVE';

export default function reducer(state = {
  isFetching: false,
  list: {}
}, action = {}) {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        list: Object.assign({}, state.list, {
          [action.category]: action.list
        })
      });
    default:
      return state;
  }
};

export function request() {
  return {
    type: REQUEST
  };
}

export function receive(category, json) {
  return {
    type: RECEIVE,
    category,
    list: json.data.rows
  };
}

export function fetchProducts(category) {
  return (dispatch) => {
    dispatch(request());
    return fetch('http://m.qbao.com/api/route/bcwap/tuan/list.html', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        type: category,
        state: 1,
        pageSize: 10,
        pageNum: 1
      })
    })
    .then(resp => resp.json())
    .then(json => dispatch(receive(category, json)));
  };
};
