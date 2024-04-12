import { ScrollView, StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { restaurants } from '../data/constants';




const Details = () => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container} style={{backgroundColor:'white'}}>
       {restaurants.map((restaurant,key) => (
            <ImageBackground key={key} source={restaurant.img} style={styles.categoryCard}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between',padding:5}}>
                  <TouchableOpacity style={{borderRadius:100,backgroundColor:'white',height:30,aspectRatio:1,alignItems:'center',margin:5}}>
                    <Image  source={require('../assets/bookmark.png')} style={{ height:18,top:5}} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{borderRadius:100,backgroundColor:'white',height:30,aspectRatio:1,alignItems:'center',margin:5}}>
                    <Image  source={require('../assets/heart.png')} style={{ width:25,top:5}} />
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    top: 20,
    paddingHorizontal: 18,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  categoryCard: {
    width: 200,
    height: 280,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.06,
    
  
  },
  categoryText: {
    
    fontSize: 18,
    fontFamily:'Urbanist-Bold',
    color: '#fff',
  },
  smallText:{
    fontSize: 10,
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


export default Details