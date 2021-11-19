import React, {useEffect, useState, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './screens/RootStackScreen';
import api from './utils/Api';
import PostsContext from './contexts/Posts';
import HandlingContext from './contexts/Handling';
import Loader from './components/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // posts.forEach(i => console.log(i.id));
    console.log(posts.length);
  }, [posts]);

  useEffect(() => {
    handlingContext.getInitialPosts();
  }, []);

  const handlingContext = {
    getInitialPosts: () => {
      api
        .getPosts()
        // .then(posts => setPosts(posts))
        .then(posts => setPosts(prevPosts => [...prevPosts, ...posts]))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false));
    },
    handleDeletePost: post => {
      api
        .deletePost(post.id)
        .then(() => setPosts(posts => posts.filter(item => item !== post)))
        .catch(err => console.log(err));
    },
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <PostsContext.Provider value={posts}>
      <HandlingContext.Provider value={handlingContext}>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </HandlingContext.Provider>
    </PostsContext.Provider>
  );
};

export default App;
