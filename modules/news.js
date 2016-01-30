

const REQUEST = 'qbao/news/REQUEST';
const RECEIVE = 'qbao/news/RECEIVE';

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

export function requestNews() {
  return {
    type: REQUEST
  };
}

export function receiveNews(json) {
  return {
    type: RECEIVE,
    list: json.data.aaData
  };
}

export function fetchNews() {
  return (dispatch) => {
    dispatch(requestNews());
    return fetch('http://www.qbao.com/announce/annoList.html', {
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
    .then(json => dispatch(receiveNews(json)));
  };
};
