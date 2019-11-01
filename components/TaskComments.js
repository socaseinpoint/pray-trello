import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import SvgUri from 'react-native-svg-uri';
import AppContent from './AppContent';
import sampleImage from '../dist/users/sample.png';
import TaskAddComment from './TaskAddComment';

const styles = StyleSheet.create({
  title: {
    color: '#72A8BC',
    fontSize: 13,
    lineHeight: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    marginBottom: 13,
  },
  row: {
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
  },
  col: {
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    padding: 15,
  },
  author: {
    fontWeight: 'bold',
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
    marginRight: 6,
  },
  createdAt: {
    color: '#9C9C9C',
    fontSize: 13,
    lineHeight: 16,
  },
  body: {
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
  },
  comment: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 12,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  }
});

const TaskCommentsItem = ({ authorImage, authorName, body, createdAt}) => (
  <View style={styles.comment}>
    <Image
      source={authorImage ? authorImage : sampleImage}
      style={styles.image}
    />
    <View>
      <View style={styles.title}>
        <View>
          <Text style={styles.author}>{authorName}</Text>
        </View>
        <View>
          <Text style={styles.createdAt}>{createdAt}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.body}>
          {body}
        </Text>
      </View>
    </View>
  </View>
)

const TaskComments = ({ comments }) => (
  <>
    <AppContent>
      <Text style={styles.title}>
        Comments
      </Text>
    </AppContent>
    <View style={styles.row}>
      {
        comments && comments.length ? (
          <View style={styles.col}>
            {
              comments.map((comment) => (
                <TaskCommentsItem
                  key={comment.id}
                  authorImage={comment.author.image}
                  authorName={comment.author.name}
                  body={comment.body}
                  createdAt={comment.createdAt}
                />
              ))
            }
          </View>
        ) : null
      }
      <TaskAddComment />
    </View>
  </>
);

export default TaskComments;
