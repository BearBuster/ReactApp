import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', description: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        let newPost = {...post, id: Date.now()}
        create(newPost);
        setPost({title: '', description: ''})
    }

    return (
        <form action="">
            <MyInput
                value={post.title}
                placeholder={"Название поста"}
                onChange={(event) => setPost({...post, title: event.target.value})}
            />
            <MyInput
                value={post.description}
                placeholder={"Описание поста"}
                onChange={(event) => setPost({...post, description: event.target.value})}
            />
            <MyButton onClick={addNewPost} >New Button</MyButton>
        </form>
    );
};

export default PostForm;