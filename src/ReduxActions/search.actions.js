import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { GET_SEARCH_RESULT, SET_SEARCH_RESULT } from '../ReduxConstants';
import { request } from '../utils/common';

const getSearchResult = (data) => ({
    type : GET_SEARCH_RESULT,
    payload : data
})

const setSearchResult = (data) => ({
    type : SET_SEARCH_RESULT,
    payload : data
})

export const fetchSearchData =async (data) => { 
    const resp = await request(data.url, { method: 'GET'});
    if(resp.status=200){
        // await dispatch(setSearchResult({ payload:resp, status: -1 }))
    }
    // return async (dispatch: ThunkDispatch<{}, {}, AnyAction>):Promise<void>=>{
    //     await dispatch(getSearchResult(data))
    // }
 }