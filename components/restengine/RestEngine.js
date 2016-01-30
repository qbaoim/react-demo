/**
    Rest api by fengsh
 */
 
const REQUEST_REST_TAG = 'rest_request_';
const RECEIVE_REST_TAG = 'rest_receive_';

//改变 State 只能通过向 Reducer dispatch actions 来完成
export default function reducer(state = {
  isRequesting : false,
  requestid : null,
  responseobj : null
}, action = {}) {
  switch (action.type) {
    case REQUEST_REST_TAG:
      return Object.assign({}, state, {
        isRequesting : true,
        requestid : action.reqid
      });
    case RECEIVE_REST_TAG:
      return Object.assign({}, state, {
        isRequesting : false,
		requestid : action.reqid,
        responseobj : action.responseobj
      });
    default:
      return state;
  }
};

//action
export function requestRest(rid) {
  return {
    type : REQUEST_REST_TAG,
	reqid :rid
  };
}

//action
export function receiveRest(rid,json) {
  return {
    type: RECEIVE_REST_TAG,
	reqid : rid,
    responseobj : json
  };
}

//action触发 requestid string,url string,method string ,headers object,body object
export function fetchRestDatas(requestid,url,method,headers = {},body = {}) {
  return (dispatch, getState) => {
    dispatch(requestRest(requestid));
    return fetch(url, {
      method: method,
      headers: headers,
      body: JSON.stringify(body)
    })
    .then(resp => resp.json())
    .then(json => dispatch(receiveRest(json)));
  };
};
