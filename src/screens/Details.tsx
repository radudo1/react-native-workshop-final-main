import { Text, StyleSheet, ScrollView } from 'react-native';

import type { DetailsScreenProps } from '../navigation.models';

const Details = ({ route }: DetailsScreenProps) => {
  const message = route.params.message;
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={styles.text}>{message}</Text>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 50,
    marginHorizontal: 8,
  },
});
