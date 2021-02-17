import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import AddForm from './components/AddForm';
import Header from './components/Header';
import Item from './components/Item';
import PreMadeItems from './components/PreMadeItems';

export default function App() {
  const [items, setItems] = useState([]);

  const _renderItem = (item) => (
    <Item item={item.item} deleteItem={handleDelete} editItem={handleEdit} />
  );

  const _listEmptyComponent = () => {
    return (
      <View style={styles.noItemsContainer}>
        <View style={styles.round}>
          <Icon5 name="list-ul" size={40} color="#d35400" />
        </View>
        <Text style={styles.text}>Your list is empty</Text>
        <Text style={styles.meta}>
          Start adding things you need to make sure nothing's left behind.
        </Text>
      </View>
    );
  };

  function handleAdd(text) {
    if (!text) {
      return;
    }
    const item = {
      id: items.length + 1,
      isDone: false,
      createdAt: Date.now(),
      text,
    };

    setItems((items) => [...items, item]);
  }

  function handleEdit(itemId) {
    const item = items.find((el) => el.id === itemId);

    item.isDone = item.id === itemId && !item.isDone;

    const oldItems = items.filter((el) => el.id !== itemId);
    const newItems = [...oldItems, item].sort((a, b) => a.id - b.id);

    setItems(newItems);
  }

  function handleDelete(itemId) {
    const newItems = items.filter((el) => el.id !== itemId);
    setItems(newItems);
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddForm addItem={handleAdd} />
      <PreMadeItems addItem={handleAdd} />
      <FlatList
        data={items}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={_listEmptyComponent}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noItemsContainer: {
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d35400',
  },
  round: {
    borderRadius: 150 / 2,
    backgroundColor: '#ffeaa7',
    height: 150,
    width: 150,
    marginBottom: 15,
    lineHeight: 150,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .7
  },
  meta: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    color: '#666'
  },
});
