const REQUEST_ACTIVITIES = 'qbao/baogou/REQUEST_ACTIVITIES';
const RECEIVE_ACTIVITIES = 'qbao/baogou/RECEIVE_ACTIVITIES';

export default function reducer(state = {
  isFetching: false,
  activities: []
}, action = {}) {
  switch (action.type) {
    case REQUEST_ACTIVITIES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_ACTIVITIES:
      return Object.assign({}, state, {
        isFetching: false,
        activities: action.list
      });
    default:
      return state;
  }
};

export function requestActivities() {
  return {
    type: REQUEST_ACTIVITIES
  };
}

export function receiveActivities(json) {
  return {
    type: RECEIVE_ACTIVITIES,
    list: json.data
  };
}

export function fetchActivities() {
  return (dispatch) => {
    dispatch(requestActivities());
    return fetch('http://bc.qbao.com/activityArea/listActivityArea.html', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({})
    })
    .then(resp => resp.json())
    .then(json => dispatch(receiveActivities(json)));
  };
};
