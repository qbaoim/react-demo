/**
 */


import * as RestEngine from './RestEngine';

const QBWSRestApi = {
	
	fetchTest(){
			return RestEngine.fetchRestDatas('req_shit_test','http://m.qbao.com/api/v34/merchant4Client/act/listContent',
    					'post',{
        				'Content-Type': 'application/json;charset=UTF-8'
						},{
        				tId: 41,
        				sId: 1
						}			
					);
	}
}

export default QBWSRestApi; 