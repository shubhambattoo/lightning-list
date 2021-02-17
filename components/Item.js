import React from 'react';
import { Text, View } from 'react-native';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const Item = ({ item, editItem, deleteItem }) => {
  function pressHandler(type) {
    if (type === 'delete') {
      deleteItem(item.id);
    } else if (type === 'edit') {
      editItem(item.id);
    }
  }

  let extraStyles = {};

  if (item.isDone) {
    extraStyles = {
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid',
      opacity: 0.6,
    };
  }

  return (
    <View
      style={{
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 15,
        marginVertical: 5,
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{ paddingEnd: 10 }}>
          <Icon5 name="shopping-bag" size={20} color='#c2c2c2' />
        </View>
        <Text style={{ color: '#555', fontSize: 16, ...extraStyles }}>
          {item.text}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Icon5.Button
          name={item.isDone ? 'plus' : 'check'}
          backgroundColor="#f1f1f1"
          color="#00d47f"
          onPress={() => pressHandler('edit')}
          iconStyle={{ marginRight: 0 }}
        ></Icon5.Button>
        <View style={{ marginRight: 5 }} />
        <Icon5.Button
          name="trash"
          backgroundColor="#f1f1f1"
          color="#ff5454"
          iconStyle={{ marginRight: 0 }}
          onPress={() => pressHandler('delete')}
        ></Icon5.Button>
      </View>
    </View>
  );
};

export default Item;
