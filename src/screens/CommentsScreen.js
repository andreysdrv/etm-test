import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {fetchComments} from '../asyncActions/comments';
import Loader from '../components/Loader';

class CommentsScreen extends Component {
  componentDidMount() {
    this.props.toggleLoading();
    this.props.getComments(this.props.route.params.id);
  }

  render() {
    if (this.props.isLoading) {
      return <Loader />;
    }
    return (
      <View style={styles.wrapper}>
        <FlatList
          keyExtractor={item => item.id}
          ListHeaderComponent={
            <View style={styles.header}>
              <Text
                style={{
                  ...styles.title,
                  ...styles.headerText,
                }}>
                О чем пост: {this.props.route.params.body}
              </Text>
              <Text
                style={{
                  ...styles.title,
                  ...styles.headerText,
                }}>
                Комментарии:
              </Text>
            </View>
          }
          contentContainerStyle={styles.container}
          data={this.props.comments}
          renderItem={({item}) => (
            <View style={styles.post}>
              <Text style={styles.text}>{item.body}</Text>
              <Text style={styles.title}>Автор: {item.name}</Text>
              <Text style={styles.title}>Email: {item.email}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.comments,
    isLoading: state.comments.isLoading,
  };
};

const mapDispatchToProps = () => {
  return {
    getComments: id => fetchComments(id),
    toggleLoading: () => ({type: 'TOGGLE_LOADING', payload: true}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(CommentsScreen);

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
  text: {
    color: '#dddbf1',
    marginBottom: 10,
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
  header: {
    marginVertical: 5,
  },
  headerText: {
    fontSize: 20,
    color: '#383f51',
    marginBottom: 10,
  },
});
