import { SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import KeyboardInput from '../components/KeyboardInput/KeyboardInput';
import TaskList from '../components/TaskList/TaskList';

const HomeScreen = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const navigation = useNavigation();

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };
  const onDeleteTask = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const onPress = (index: number) => {
    navigation.navigate('Details', { message: tasks[index] });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TaskList tasks={tasks} onDeleteTask={onDeleteTask} onPress={onPress} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
      >
        <KeyboardInput task={task} setTask={setTask} addTask={addTask} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
