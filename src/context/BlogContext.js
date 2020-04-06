import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer=(state,action)=>{
    switch(action.type){
        case 'get_blogposts':{
            return {blogPost:action.payload};
        }
        case 'editerror':{
            return {...state,error:action.payload};
        }
        case 'clearErrorMessage':{
            return {...state,error:''};
        }
        // case 'add_BlogPost':{
        //     return {...state, blogPost:[...state.blogPost,
        //          {title:action.payload.title,
        //           content:action.payload.content,
        //           id:Math.floor(Math.random()*9999)}]};
        // }
        case 'delete_BlogPost':{
            return {...state, blogPost:state.blogPost.filter((blog)=>blog.id !== action.payload)};
        }
        case 'edit_BlogPost':{
            return {...state, blogPost:state.blogPost.map((blogpost)=>{
                return blogpost.id===action.payload.id ? action.payload:blogpost
            })}
        }
        default:
            return state;
    }
}

const getBlogPosts=dispatch=>{
    return async ()=>{
        const response = await jsonServer.get('/blog');

        dispatch({type:"get_blogposts", payload: response.data})
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

const addBlogPost=dispatch=>async(title,content,callback)=>{
    await jsonServer.post('/blog',{title,content})
    //dispatch({type:'add_BlogPost', payload:{title,content}})

    if(callback){
        callback();
    }
}

const deleteBlogPost=dispatch=>async(id)=>{
    await jsonServer.delete(`/blog/${id}`)

    dispatch({type:'delete_BlogPost' , payload:id})
}

const editBlogPost=dispatch=>async(id,title,content,callback)=>{

    await jsonServer.put(`blog/${id}`,{title,content})
    
    dispatch({type:'edit_BlogPost',payload:{id,title,content}})

    if(callback){
        callback();
    }
}

export const {Context, Provider}=createDataContext(blogReducer,
    {editError,clearErrorMessage,addBlogPost,deleteBlogPost,editBlogPost,getBlogPosts},
    {error:'',blogPost:[]}
)
