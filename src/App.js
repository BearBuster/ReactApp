import React, {useEffect, useMemo, useRef, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import {usePosts} from "./hooks/usePost";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {

    useEffect(() => {
        fetch(`http://localhost:8080/api/user/`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalCount, setTotalCount] = useState(0)

    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll();
        setPosts(response.data)
        response.headers
    });

    useEffect( ()=>{
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
      <div className="App">
          <MyButton style={{marginTop: 25}} onClick={() => setModal(true)}>Создать пост</MyButton>
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost} />
          </MyModal>
          <hr style={{margin: '15px 0'}} />
          <PostFilter filter={filter} setFilter={setFilter} />
          {postError && <h1>{postError}</h1>}
          {isLoading?
              <div style={{display: "flex", justifyContent: "center", marginTop: 50}}>
                  <Loader />
              </div>
              :
              <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список Постов"} />
          }
      </div>
  );
}

export default App;
