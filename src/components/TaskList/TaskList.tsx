import { View, FlatList, StyleSheet } from 'react-native';

import Task from '../Task/Task';
interface TaskListProps {
  tasks: string[];
  onDeleteTask: (index: number) => void;
  onPress: (index: number) => void;
}
const TaskList = ({ tasks, onDeleteTask, onPress }: TaskListProps) => (
  <View style={styles.taskList}>
    <FlatList
      data={tasks}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Task text={item} onDelete={() => onDeleteTask(index)} onPress={() => onPress(index)} />
      )}
    />
  </View>
);
const styles = StyleSheet.create({
  taskList: {
    flex: 1,
  },
});

export default TaskList;
