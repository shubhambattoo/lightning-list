import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, Button } from 'react-native';

const AddForm = ({ addItem }) => {
  const [text, setText] = useState('');

  function add() {
    addItem(text);
    setText('');
  }

  return (
    <View style={styles.formGroup}>
      <TextInput
        style={styles.input}
        placeholder="Add Items"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <Button color="orange" title="Add" onPress={add} />
    </View>
  );
};

const styles = StyleSheet.create({
  formGroup: {
    padding: 15,
    marginBottom: 5,
    flexDirection: 'row',
  },
  input: {
    flex: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    paddingStart: 8,
    paddingBottom: 5,
    marginRight: 8,
  },
});

export default AddForm;
