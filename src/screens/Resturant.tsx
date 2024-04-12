import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native';
import { restaurants } from '../data/constants';
import { Button, Card } from 'react-native-elements';


const Resturant = ({ filteredData }: { filteredData: any[] }) => {
  
  return (
    <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      top: 20,
      padding: 10,
     
    }}>
    {filteredData.map((restaurant:any,key:any) => (
            <ImageBackground key={key} source={restaurant.img} style={styles.categoryCard}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',padding:5}}>
                  <TouchableOpacity style={{borderRadius:100,backgroundColor:'white',height:22,aspectRatio:1,alignItems:'center'}}>
                    <Image  source={require('../assets/bookmark.png')} style={{ width:10,top:5}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderRadius:100,backgroundColor:'white',height:22,aspectRatio:1,alignItems:'center'}}>
                    <Image  source={require('../assets/heart.png')} style={{ height:18,top:2}} />
                  </TouchableOpacity>
              </View>
              <View style={styles.categoryBox}>
                <Text style={styles.categoryText}>{restaurant.name}</Text>
                <Text style={styles.categoryText}>{restaurant.restaurant}</Text>
                <Text style={styles.smallText}>{restaurant.diet} | {restaurant.cuisine} | {restaurant.protiens}</Text>
                
              </View>
            </ImageBackground>
        
        
    ))}
  </ScrollView>

  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 146,
    height: 204,
    borderRadius: 14,
    backgroundColor: '#fff',
    marginEnd: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    
  
  },
  categoryText: {
    
    fontSize: 14,
    fontFamily:'Urbanist-Bold',
    color: '#fff',
  },
  smallText:{
    fontSize: 8,
    fontFamily:'Urbanist-Regular',
    color: '#fff',
  },
  categoryBox: {
    flex: 2,
    padding: 5,
    bottom: 0,
    position: 'absolute'
  },
});

export default Resturant;