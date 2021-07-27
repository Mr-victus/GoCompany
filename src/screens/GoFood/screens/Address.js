/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text,TouchableOpacity,View, ScrollView } from 'react-native';
import { Divider, Dialog, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Address = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);

    const [text, setText] = React.useState('');

    return (
        <>
            <View style={{ flexDirection: "row", paddingHorizontal: 20, paddingVertical: 15, justifyContent: "space-between" }}>
                <Text style={{ fontSize: 20, }}>Select an address</Text>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}><Text style={{ fontSize: 20, color: "grey", fontWeight: "bold" }}><Icon name="cross" size={25} /></Text></TouchableOpacity>
            </View>
            <Divider />
            <TouchableOpacity onPress={showDialog}>
                <Text style={{ color: "red", fontSize: 15, paddingHorizontal: 20, paddingVertical: 10 }}>+  Add Address</Text>
            </TouchableOpacity>
            <Divider />
            <Text style={{ fontSize: 17, paddingHorizontal: 20, paddingVertical: 15, }}>Saved Addresses</Text>
            <Text style={{ paddingHorizontal: 20, paddingVertical: 10, fontSize: 10, color: '#0366fc' }}>DELIVERS TO</Text>
            <ScrollView>
                <TouchableOpacity style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <AntDesign name="checkcircleo" size={15} color={'#0366fc'} style={{ marginTop: 5 }} />
                    </View>
                    <View style={{ flex: 10 }}>
                        <Text style={{ fontSize: 15, color: 'black' }}>Home </Text>
                        <Text style={{ fontSize: 10, color: 'gray' }}>Fbhj, Neeladri Vihar , Chandrasekharpur, Bhubaneswar</Text>
                    </View>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
                        <Icon name="trash" size={20} color="#ff5552" />
                    </TouchableOpacity>
                </TouchableOpacity>
                <Divider />
            </ScrollView>
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Add a New Address</Dialog.Title>
                <Dialog.Content>
                    <TextInput
                        label="Name"
                        value={text}
                        onChangeText={text => setText(text)}
                        mode="outlined"
                    />
                    <TextInput
                        label="Flat/Colony/Street"
                        value={text}
                        onChangeText={text => setText(text)}
                        mode="outlined"
                    />
                    <TextInput
                        label="Area"
                        value={text}
                        onChangeText={text => setText(text)}
                        mode="outlined"
                    />
                    <TextInput
                        label="City"
                        value={text}
                        onChangeText={text => setText(text)}
                        mode="outlined"
                    />
                    <TextInput
                        label="District"
                        value={text}
                        onChangeText={text => setText(text)}
                        mode="outlined"
                    />
                    <TextInput
                        label="Pincode"
                        value={text}
                        onChangeText={text => setText(text)}
                        mode="outlined"
                    />
                </Dialog.Content>
                <Dialog.Actions>
                    <TouchableOpacity onPress={hideDialog}><Text style={{color: 'green', fontWeight: 'bold'}}>ADD</Text></TouchableOpacity>
                </Dialog.Actions>
            </Dialog>
        </>
    );
}

export default Address;