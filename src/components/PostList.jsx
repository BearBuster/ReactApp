import React from 'react';
import PostItme from "./PostItme";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if(posts.length === 0){
        return (
            <div>
                <h1 style={{textAlign: "center"}}>Постов пока нет!</h1>
            </div>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={600}
                        classNames="post"
                    >
                        <PostItme remove={remove} number={index + 1} post={post} />
                    </CSSTransition>

                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;