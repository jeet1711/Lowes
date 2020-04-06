import React, { useContext } from 'react';
import BlogPostForm from '../component/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen=({navigation})=>{
    const {state,editBlogPost}=useContext(Context);

    const id=navigation.getParam('id');
    const blog=state.blogPost.find((blogpost)=>blogpost.id===id);

    return(
        <BlogPostForm
         onSubmit={(title,content)=>{
             editBlogPost(id,title,content,()=>navigation.pop())
         }}
         initialValues={{title:blog.title, content:blog.content}} />
    )
}

export default EditScreen;