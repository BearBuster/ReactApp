import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItme = (props) => {

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}.{props.post.title}</strong>
                <div>
                    {props.post.description}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={e => props.remove(props.post)} >Удалить</MyButton>
            </div>
        </div>
    );
};

export default PostItme;