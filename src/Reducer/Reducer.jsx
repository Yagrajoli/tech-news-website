export const reducer = (state,action) =>{

    switch(action.type){
        case "GET_STORIES":
            return{
                ...state,
                isLoading:false,
                hits:action.payload.hits,
                nbPages: action.payload.nbPages
            }

        case "SET_LOADING":
            return{
                ...state,
                isLoading:true
            }

        case "SEARCH_POST":
            return{
                ...state,
                query:action.payload
            }
        case "removePost":
            return{
                ...state,
                hits:state.hits.filter((currEle)=>{
                    return currEle.objectID !== action.payload
                })
            }

        case "PRIVIOUS_POST":
            let pageNumber = state.page - 1;
            if(pageNumber<=0){
                pageNumber = 0;
            }
            return{
                ...state,
                page:pageNumber

            }
        case "NEXT_POST":
            let NextPageNumber = state.page + 1;
            if(NextPageNumber>=50){
                NextPageNumber = 0;
            }
            return{
                ...state,
                page:NextPageNumber

            }
    }

    return state;

}