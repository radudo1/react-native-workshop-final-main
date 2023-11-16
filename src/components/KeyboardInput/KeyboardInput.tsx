import { Button, View, TextInput, StyleSheet } from 'react-native';

interface KeyboardInputProps {
  task: string;
  setTask: (task: string) => void;
  addTask: () => void;
}

const KeyboardInput = ({ task, setTask, addTask }: KeyboardInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Add a task"
        value={task}
        style={styles.textInput}
        placeholderTextColor="#000"
        onChangeText={(text) => setTask(text)}
        editable
        multiline
        maxLength={500}
      />
      <Button title="Add" color="#006CB7" onPress={addTask} />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
    borderColor: '#006CB7',
    backgroundColor: '#F1F1F4',
    borderRadius: 16,
    borderWidth: 2,
    paddingHorizontal: 8,
  },
  textInput: {
    maxWidth: '80%',
    flex: 1,
  },
});
export default KeyboardInput;
