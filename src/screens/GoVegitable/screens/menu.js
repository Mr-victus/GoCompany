/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View ,Text, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import { Divider } from 'react-native-paper';
import Add from '../components/add';
const { width, height } = Dimensions.get('screen');
import AntDesign from 'react-native-vector-icons/AntDesign';



const items = [
    {
        type:1,
        name:"Chicken Dum Biriyani",
        typeURI: "https://www.pikpng.com/pngl/m/210-2108039_veg-logo-png-veg-symbol-clipart.png",
        typeOfDesert:"main-course",
        star:3.5,
        starPeople:100,
        hitStatus:1,
        hint:"must-try",
        price:159,
        description:"Mouth watering and flavorful with chicken in layers",
        imguri:"https://www.indianhealthyrecipes.com/wp-content/uploads/2012/10/chicken-dum-biryani-recipe.jpg"
    },
    {
        type:1,
        name:"Mutton Dum Biriyani",
        typeOfDesert:"In Main Course",
        typeURI: "https://www.pikpng.com/pngl/m/210-2108039_veg-logo-png-veg-symbol-clipart.png",
        star:3.5,
        starPeople:190,
        hitStatus:1,
        hint:"must-try",
        price:199,
        description:"Mouth watering and flavorful with chicken in layers",
        imguri:"https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/3968/b70f9551dc0a9e4b8742/compressed_chickenrice.jpg"
    },
    {
        type:1,
        name:"Veg Biriyani",
        typeOfDesert:"In Main Course",
        typeURI: "https://www.pikpng.com/pngl/m/210-2108039_veg-logo-png-veg-symbol-clipart.png",
        star:4.5,
        starPeople:522,
        hitStatus:1,
        hint:"Best-Seller",
        price:109,
        description:"Mouth watering and flavorful with chicken in layers",
        imguri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-ROL4wOR3lnpJ3YcLVxUhhip_V3QAlfj6A&usqp=CAU"
    },
    {
        type:1,
        name:"Tava Roti",
        typeOfDesert:"In Main Course",
        typeURI: "https://www.pikpng.com/pngl/m/210-2108039_veg-logo-png-veg-symbol-clipart.png",
        star:4.5,
        starPeople:522,
        hitStatus:1,
        hint:"Best-Seller",
        price:109,
        description:"Mouth watering and flavorful with chicken in layers",
        imguri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz4Gb5NimLYOStK59d5iqHihRlapDQqd4ZWQ&usqp=CAU"
    },
    {
        type:1,
        name:"Panner Butter Masala",
        typeOfDesert:"In Main Course",
        typeURI: "https://www.pikpng.com/pngl/m/210-2108039_veg-logo-png-veg-symbol-clipart.png",
        star:4.5,
        starPeople:522,
        hitStatus:1,
        hint:"Best-Seller",
        price:109,
        description:"Mouth watering and flavorful with chicken in layers",
        imguri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqeJVdpvfRnbPXH6cUOQS9htRms4aOwIBDSA&usqp=CAU"
    },
]
const Zomato = ({navigation}) => {

    const [state,setState] = React.useState({selectedIndex:2} )
    const updateIndex =(selectedIndex)=> {
        setState({selectedIndex})
      }
    const buttons = ['Veg', 'NonVeg', 'All']
    const { selectedIndex } = state;
    // const ChildElement = React.createRef(); 
    // const childelement = ChildElement.current; 
    //  console.log("current state of child is :  "+ childelement.state.count);
  return (
    <View style={{flex: 1,backgroundColor: 'white', padding: 10}}>
        <View style={{flexDirection:'row',backgroundColor:"white",borderStartColor:'black', alignItems: 'center'}}>
            <View style={{flex:2}}>
                <Text style={{color:'black',fontSize:20,fontWeight:'bold',padding:10}}>Menu</Text>
            </View>
            <ButtonGroup
                onPress={updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                  containerStyle={{ height: 35, flex: 2,backgroundColor: 'white', borderWidth: 0 }}
                  buttonStyle={{ borderRadius: 100 }}
                  selectedButtonStyle={{ backgroundColor: '#7952B3' }}
                  innerBorderStyle={{width: 0}}
            />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
            {
                items.map((props,index)=> {
                    return (
                        <View key={index}>
                            <View style={{flexDirection:'row', marginBottom: 10, marginTop: 10}}>
                                <View style={{flex: 1, padding:3 }}>
                                    <Image source={{ uri: props.typeURI }} style={{ width: 20, height: 20, marginTop: 10 }}/>
                                </View>
                                <View style={{flex: 14, padding: 5}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 19, color: 'black'}}>{props.name}</Text>
                                    <Text style={{fontSize: 12, fontWeight: '100', color: 'grey'}}>{props.typeOfDesert}</Text>
                                    <Text style={{marginVertical: 5, fontWeight: 'bold', fontSize: 17}}>₹{props.price}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{fontSize: 8,backgroundColor: '#feff8750', borderRadius: 5, borderWidth: 1, borderColor : '#9a9c00', paddingHorizontal: 4, fontWeight: '100', color: 'grey', paddingVertical: 2 }}>{props.star}/5 <Icon name="star" color="#ebae34" />   {props.starPeople}</Text>
                                        <Text style={{marginLeft: 15,fontSize: 8,backgroundColor: 'pink', borderRadius: 5, borderWidth: 1, borderColor : 'red', paddingHorizontal: 4, fontWeight: 'bold',paddingVertical: 3.5 }}>{props.hint}</Text>
                                    </View>
                                    <Text style={{marginVertical : 10,fontSize: 12, fontWeight: '100', color: 'grey'}}>{props.description}</Text>
                                </View>
                                <View style={{flex: 7, padding: 5}}>
                                    <Image source={{ uri: props.imguri }} style={{  padding: 10, borderRadius: 20, marginBottom: 5, height: 100 }}/>
                                    <View style={{width: width/4, height: 35,alignSelf: 'center', top: -15}}>
                                        <Add style={{zIndex: 1}} />
                                    </View>
                                </View>
                            </View>
                            <Divider />
                        </View>
                    );
                })
              }
          </ScrollView>
          <TouchableOpacity onPress={()=>{navigation.navigate('FoodCart')}} style={{backgroundColor:'#7952B3',marginLeft: 15,marginBottom:20,marginTop:10,marginRight:15,flexDirection:'row',paddingVertical:10,paddingHorizontal:10,justifyContent:'space-between',  padding: 5, borderRadius:10, alignItems: 'center', elevation: 5}}>
              <Text style={{color:"white",fontSize:20}}>View Cart</Text>
              <AntDesign name="caretright" size={20} color={'white'} /> 
        </TouchableOpacity>
    </View>
  );
}

export default Zomato;