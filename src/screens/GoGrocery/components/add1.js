/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Child = (props) => {
  const [count, setCount] = React.useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      {count === 0 ? (
        <TouchableOpacity
          onPress={IncNum}
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            paddingVertical: 6,
            borderRadius: 10,
            justifyContent: 'space-around',
            alignItems: 'center',
            alignContent: 'center',
          }}>
          <Text style={{color: '#298c3d', fontSize: 10, fontWeight: '800'}}>
            ADD +
          </Text>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            alignContent: 'center',
            justifyContent: 'center',
            padding: 5,
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}
            onPress={DecNum}>
            <Text style={{fontWeight: 'bold', color: 'grey'}}>-</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              alignSelf: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>{count}</Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 1,
              alignSelf: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}
            onPress={IncNum}>
            <Text style={{fontWeight: 'bold', color: 'grey'}}>+</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export default Child;
