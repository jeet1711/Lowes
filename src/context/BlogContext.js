import createDataContext from './createDataContext';

const blogReducer=(state,action)=>{
    switch(action.type){
        case 'editerror':{
            return {...state,error:action.payload};
        }
        case 'clearErrorMessage':{
            return {...state,error:''};
        }

        // case 'addAmount':{
        //     return {...state,amount:action.payload}
        // }
        // case 'add_BlogPost':{
        //     return {...state, blogPost:[...state.blogPost,
        //          {title:action.payload.title,
        //           content:action.payload.content,
        //           id:Math.floor(Math.random()*9999)}]};
        // }
        default:
            return state;
    }
}



const editError=dispatch=>{
    return(error)=>{
       // console.log(error);
        dispatch({type:'editerror',payload:error})
    }
}

const clearErrorMessage=dispatch=>()=>{
        dispatch({type:'clearErrorMessage'})
}

// const addAmount=dispatch=>(amt,qnt)=>{
//     dispatch({type:'addAmount',
//     payload:amt*qnt})
// }


export const {Context, Provider}=createDataContext(blogReducer,
    {editError,clearErrorMessage},
    {error:'',amount:0}
)
