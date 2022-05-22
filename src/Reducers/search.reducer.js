import { GET_SEARCH_RESULT, SET_SEARCH_RESULT } from "../ReduxConstants"

const initialState = {
    search :{
        data : null,
        status : null
    }
}

const SearchReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_SEARCH_RESULT:
            return ({
                ...state,
                search:{
                    status : 0,
                    data : null,
                }
            });
        case SET_SEARCH_RESULT:
            return ({
                ...state,
                search:{
                    status : payload.status,
                    data : payload.data
                }
            })
        default:
            return ({
                search :{
                    data : null,
                    status : null
                }
            })
    }
}
export default SearchReducer