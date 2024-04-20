import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../Reducer/Reducer";

// create a context



const initialState = {
    isLoading:true,
    query:"",
    page:0,
    nbPages:0,
    hits:[]

}

let  API = "http://hn.algolia.com/api/v1/search?"

export const AppContext = createContext();

export const AppProvider = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,initialState);

   

    const getAPI = async(url) =>{

       try {

        dispatch({type:"SET_LOADING"})

        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);

        dispatch({
            type:"GET_STORIES",
            payload:{
                hits:data.hits,
                nbPages:data.nbPages
            }
        })

       } catch (error) {
        console.log(error);
       }
    }

    // search post

    const searchPost = (searchQuery) =>{
        dispatch({type:"SEARCH_POST", payload:searchQuery})
    }

    // removePost

    const removePost = (postId) =>{
        dispatch({type:"removePost", payload:postId})
    }

    // goto Previous page

    const prevPost = () =>{
        dispatch({type:"PRIVIOUS_POST"})
    }
    // goto next page

    const nextPost = () =>{
        dispatch({type:"NEXT_POST"})
    }

    useEffect(()=>{
        let setTime = setTimeout(()=>{
            getAPI(`${API}query=${state.query}&page=${state.page}`)
        },1000)

        return () => clearTimeout(setTime)
    },[state.query])
    useEffect(()=>{
        

        getAPI(`${API}query=${state.query}&page=${state.page}`)

        
    },[state.page])

    

    return(
        <AppContext.Provider value={{...state,searchPost,removePost,prevPost,nextPost}}>  {children} </AppContext.Provider>
    )
}


// create a custom hook

export const useGlobalContext = () =>{
    return useContext(AppContext)
}