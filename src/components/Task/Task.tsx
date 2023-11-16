import { Pressable, View, Text, Button, StyleSheet } from 'react-native';

interface TaskProps {
  text: string;
  onDelete: () => void;
  onPress: () => void;
}
const Task = ({ text, onDelete, onPress }: TaskProps) => (
  <View style={styles.task}>
    <Pressable onPress={onPress} style={{ width: '80%' }}>
      <Text style={styles.taskButtonText} numberOfLines={1}>
        {text}
      </Text>
    </Pressable>
    <Button color="black" title="Delete" onPress={onDelete} />
  </View>
);
const styles = StyleSheet.create({
  task: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  taskButtonText: {
    fontSize: 23,
    fontWeight: 'bold',
    flex: 1,
  },
});

export default Task;
