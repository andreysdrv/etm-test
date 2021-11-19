import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Loader from '../components/Loader';

import api from '../utils/Api';

const CommentsScreen = ({route}) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .getComments(route.params.id)
      .then(comments => {
        setComments(comments);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
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
              Заголовок: {route.params.title}
            </Text>
            <Text
              style={{
                ...styles.title,
                ...styles.headerText,
              }}>
              О чем пост: {route.params.body}
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
        data={comments}
        renderItem={({item}) => (
          <View style={styles.post}>
            <Text style={styles.title}>Автор: {item.name}</Text>
            <Text style={styles.text}>Комментарий: {item.body}</Text>
            <Text style={styles.title}>Email: {item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CommentsScreen;

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
  header: {
    marginVertical: 5,
  },
  headerText: {
    fontSize: 20,
    color: '#383f51',
  },
});
