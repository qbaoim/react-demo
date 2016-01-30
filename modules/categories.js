const REQUEST = 'qbao/categories/REQUEST';
const RECEIVE = 'qbao/categories/RECEIVE';

export default function reducer(state = {
  isFetching: false,
  list: []
}, action = {}) {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, {
        isFetching: true
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

export function request() {
  return {
    type: REQUEST
  };
}

export function receive(json) {
  return {
    type: RECEIVE,
    list: json.data
  };
}

export function fetchCategories() {
  return (dispatch) => {
    dispatch(request());
    return fetch('http://m.qbao.com/api/route/bcwap/productType/list.html', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        iDisplayStart: 0,
        iDisplayLength: 5
      })
    })
    .then(resp => resp.json())
    .then(json => dispatch(receive(json)));
  };
};
