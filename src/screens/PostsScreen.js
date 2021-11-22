import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts, removePost} from '../asyncActions/posts';
import Loader from '../components/Loader';

const randomDate = (start, end, startHour, endHour) => {
  const date = new Date(+start + Math.random() * (end - start));
  const hour = (startHour + Math.random() * (endHour - startHour)) | 0;
  date.setHours(hour);
  return date;
};

const PostsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.posts);
  const isLoading = useSelector(state => state.posts.isLoading);

  useEffect(() => {
    console.log(posts.length);
  });

  useEffect(() => {
    dispatch(fetchPosts());
    console.log(isLoading);
  }, []);

  const handleDeletePost = post => {
    dispatch({type: 'TOGGLE_LOADING', payload: true});
    dispatch(removePost(post));
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        onEndReached={() => dispatch(fetchPosts())}
        onEndReachedThreshold={0.1}
        initialNumToRender={5}
        keyExtractor={item => Math.random()}
        contentContainerStyle={styles.container}
        data={posts}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={() => navigation.navigate('CommentsScreen', item)}>
            {/* <Text style={styles.buttonText}>Comments</Text> */}
            <View style={styles.post}>
              <View style={styles.postHeading}>
                <Text style={styles.text}>
                  {randomDate(
                    1012002003045,
                    1912002003045,
                    0,
                    23,
                  ).toLocaleString()}
                </Text>
                <TouchableOpacity
                  activeOpacity={0.2}
                  style={styles.button}
                  onPress={() => handleDeletePost(item)}>
                  <Text style={{...styles.buttonText, color: '#ed3e58'}}>
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  wrapper: {
    // paddingVertical: 10,
    backgroundColor: '#d1beb0',
    flex: 1,
    alignItems: 'center',
  },
  container: {
    // width: '95%',
    paddingHorizontal: 10,
  },
  post: {
    width: '100%',
    // alignSelf: 'center',
    backgroundColor: '#383f51',
    marginVertical: 5,
    borderRadius: 15,
    padding: 20,
  },
  postHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#dddbf1',
  },
  title: {
    color: '#dddbf1',
    fontWeight: 'bold',
  },
  button: {
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: '#d1beb0',
  },
});

// dddbf1
// d1beb0
// 383f51
