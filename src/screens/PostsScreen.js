import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchPosts, removePost} from '../asyncActions/posts';
import Loader from '../components/Loader';

class PostsScreen extends Component {
  componentDidMount() {
    this.props.toggleLoading();
    this.props.getPosts();
  }

  randomDate(start, end, startHour, endHour) {
    const date = new Date(+start + Math.random() * (end - start));
    const hour = startHour + Math.random() * (endHour - startHour) || 0;
    date.setHours(hour);
    return date;
  }

  render() {
    if (this.props.isLoading) {
      return <Loader />;
    }
    return (
      <View style={styles.wrapper}>
        <FlatList
          onEndReached={() => this.props.getPosts()}
          onEndReachedThreshold={0.1}
          initialNumToRender={5}
          keyExtractor={item => Math.random()}
          contentContainerStyle={styles.container}
          data={this.props.posts}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                this.props.navigation.navigate('Комментарии', item)
              }>
              <View style={styles.post}>
                <View style={styles.postHeading}>
                  <Text style={styles.text}>
                    {this.randomDate(
                      1012002003045,
                      1912002003045,
                      0,
                      23,
                    ).toLocaleString()}
                  </Text>
                  <TouchableOpacity
                    activeOpacity={0.2}
                    onPress={() => {
                      this.props.toggleLoading();
                      this.props.handleDeletePost(item);
                    }}>
                    <Text style={{...styles.buttonText, color: '#ed3e58'}}>
                      Удалить
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
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    isLoading: state.posts.isLoading,
  };
};

const mapDispatchToProps = () => {
  return {
    getPosts: () => fetchPosts(),
    toggleLoading: () => ({type: 'TOGGLE_LOADING', payload: true}),
    handleDeletePost: post => removePost(post),
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(PostsScreen);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#d1beb0',
    flex: 1,
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 10,
  },
  post: {
    width: '100%',
    backgroundColor: '#383f51',
    marginVertical: 5,
    borderRadius: 15,
    padding: 20,
  },
  postHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    color: '#dddbf1',
  },
  title: {
    color: '#dddbf1',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#d1beb0',
  },
});
