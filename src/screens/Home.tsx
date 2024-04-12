import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useLinkTo } from '@react-navigation/native';
import Cooking from './Cooking';
import Resturant from './Resturant';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { restaurants } from '../data/constants';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(restaurants);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDiets, setSelectedDiets] = useState('');

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    const newData = restaurants.filter(item => item.name.toLowerCase().includes(query));
    setFilteredData(newData);
  }, []);

  const toggleModal = useCallback(() => {
    setModalVisible(prevState => !prevState);
  }, []);

  const applyFilter = useCallback(() => {
    let newData = restaurants;
    if (selectedDiets) {
      newData = restaurants.filter(item => item.diet === selectedDiets || item.cuisine === selectedDiets || item.protiens === selectedDiets);
    }
    setFilteredData(newData);
    toggleModal();
  }, [selectedDiets, toggleModal]);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Good Morning </Text>
      <Text style={styles.greeting}>Mr. Joe!</Text>
      <View style={[styles.searchBar, styles.shadowProp]}>
        <Image source={require('../assets/search.png')} style={{marginRight:8}} />
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          placeholderTextColor={'#B5B5B5'}
          clearButtonMode='while-editing'
          autoCapitalize='none'
          autoCorrect={false}
          value={searchQuery}
          onChangeText={handleSearch}
        />
        <TouchableOpacity style={styles.filterButton} onPress={toggleModal}>
          <Image
            source={require('../assets/filter.png')}
          />
        </TouchableOpacity>
      </View>
      <MyTabs filteredData={filteredData} />
      <Modal
        isVisible={isModalVisible}
        style={styles.bottomModal}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Filter</Text>
          <View style={styles.divider} />
          <Text style={styles.smallHeading}>Diet</Text>
          <View style={styles.tagContainer}>
          <Button
              title="Vegetarian"
              buttonStyle={selectedDiets === 'Vegetarian' ? styles.pressedTags : styles.tags}
              titleStyle={selectedDiets === 'Vegetarian' ? { color: 'white', fontFamily: 'Urbanist-Regular' } : { color: 'black', fontFamily: 'Urbanist-Regular' }}
              onPress={() => setSelectedDiets(selectedDiets === 'Vegetarian' ? '' : 'Vegetarian')}
            />
            <Button
              title="Non-Vegetarian"
              buttonStyle={selectedDiets === 'Non-Vegetarian' ? styles.pressedTags : styles.tags}
              titleStyle={selectedDiets === 'Non-Vegetarian' ? { color: 'white', fontFamily: 'Urbanist-Regular' } : { color: 'black', fontFamily: 'Urbanist-Regular' }}
              onPress={() => setSelectedDiets(selectedDiets === 'Non-Vegetarian' ? '' : 'Non-Vegetarian')}
            />
            <Button
              title="Vegan"
              buttonStyle={selectedDiets === 'Vegan' ? styles.pressedTags : styles.tags}
              titleStyle={selectedDiets === 'Vegan' ? { color: 'white', fontFamily: 'Urbanist-Regular' } : { color: 'black', fontFamily: 'Urbanist-Regular' }}
              onPress={() => setSelectedDiets(selectedDiets === 'Vegan' ? '' : 'Vegan')}
            />
          </View>
          <Text style={styles.smallHeading}>Cuisines</Text>
          <View style={styles.tagContainer}>
            <Button
              title="Indian"
              buttonStyle={selectedDiets === 'Indian' ? styles.pressedTags : styles.tags}
              titleStyle={selectedDiets === 'Indian' ? { color: 'white', fontFamily: 'Urbanist-Regular' } : { color: 'black', fontFamily: 'Urbanist-Regular' }}
              onPress={() => setSelectedDiets(selectedDiets === 'Indian' ? '' : 'Indian')}
            />
            <Button
              title="Mediterranean"
              buttonStyle={selectedDiets === 'Mediterranean' ? styles.pressedTags : styles.tags}
              titleStyle={selectedDiets === 'Mediterranean' ? { color: 'white', fontFamily: 'Urbanist-Regular' } : { color: 'black', fontFamily: 'Urbanist-Regular' }}
              onPress={() => setSelectedDiets(selectedDiets === 'Mediterranean' ? '' : 'Mediterranean')}
            />
          </View>
          <Text style={styles.smallHeading}>Proteins</Text>
          <View style={styles.tagContainer}>
            <Button
              title="Chicken"
              buttonStyle={selectedDiets === 'Chicken' ? styles.pressedTags : styles.tags}
              titleStyle={selectedDiets === 'Chicken' ? { color: 'white', fontFamily: 'Urbanist-Regular' } : { color: 'black', fontFamily: 'Urbanist-Regular' }}
              onPress={() => setSelectedDiets(selectedDiets === 'Chicken' ? '' : 'Chicken')}
            />
            <Button
              title="Beef"
              buttonStyle={selectedDiets === 'Beef' ? styles.pressedTags : styles.tags}
              titleStyle={selectedDiets === 'Beef' ? { color: 'white', fontFamily: 'Urbanist-Regular' } : { color: 'black', fontFamily: 'Urbanist-Regular' }}
              onPress={() => setSelectedDiets(selectedDiets === 'Beef' ? '' : 'Beef')}
            />

          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={toggleModal} style={styles.cancelButton} >
              <Text style={{ color: '#122C3E', fontFamily: 'Urbanist-Regular' }}>Cancel</Text>
            </TouchableOpacity>
            <Button title="Apply Filters" onPress={applyFilter} buttonStyle={styles.applyFilter} titleStyle={{ fontFamily: 'Urbanist-Regular' }} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

function MyTabs({ filteredData }: { filteredData: any[] }) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 20, textTransform: 'none', fontFamily: 'Urbanist-Bold' },
        tabBarStyle: { backgroundColor: '#FAF9F6', paddingTop: 10 },
        tabBarIndicatorStyle: { backgroundColor: '#122C3E', height: 3, borderRadius: 10 },
        tabBarAndroidRipple: { color: '#FAF9F6', borderless: true, },
        swipeEnabled: false,
      }}
      sceneContainerStyle={{ backgroundColor: '#FAF9F6' }}
    >
      <Tab.Screen name="Resturants">
        {() => <RestaurantsScreen filteredData={filteredData} />}
      </Tab.Screen>
      <Tab.Screen
        name="Cookings"
        component={CookingScreen}
      />
    </Tab.Navigator>
  );
}

function RestaurantsScreen({ filteredData }: { filteredData: any[] }) {
  const linkTo = useLinkTo();

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.greeting}>Satisfy your Cravings</Text>
            <Text style={{ fontSize: 12, fontFamily: 'Urbanist-Regular', color: 'black' }}>Restaurants that suits to your palate</Text>
          </View>

          <TouchableOpacity style={{ padding: 10 }} onPress={() => linkTo('/Details')}>
            <Text style={{ color: '#122C3E', fontFamily: 'Urbanist-Regular' }}>View All</Text>
          </TouchableOpacity>
        </View>
        <Resturant filteredData={filteredData} />

      </View>


    </SafeAreaView>

  );
}

function CookingScreen() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.card}>
        <Cooking />
      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F6',
    padding: 10,
  },
  safeContainer: {
    top: 10,
    borderRadius: 15,
    elevation: 2,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 10,
    height: 669,
  },
  modalTitle: {
    fontSize: 24,
    alignSelf: 'flex-start',
    color: 'black',
    fontFamily: 'Urbanist-Bold',
    paddingTop: 15,
  },
  divider: {
    height: 3,
    backgroundColor: 'black',
    marginVertical: 10,
  },
  smallHeading: {
    paddingTop: 20,
    fontSize: 16,
    fontFamily: 'Urbanist-Bold',
    color: 'black',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  tags: {
    padding: 6,
    borderRadius: 22.5,
    backgroundColor: '#FAF9F6',
    borderColor: 'black',
    borderWidth: 1.5,
    marginRight: 10,
  },
  pressedTags: {
    padding: 6,
    borderRadius: 22.5,
    borderWidth: 1.5,
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
  },
  applyFilter: {
    padding: 10,
    width: 250,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#122C3E',
  },
  cancelButton: {
    backgroundColor: 'white',
    padding: 10,
  },
  filterButton: {
    padding: 10,
  },
  greeting: {
    fontSize: 16,
    fontWeight: '600',
    color: '#122C3E',
    fontFamily: 'Urbanist-Bold',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#B5B5B5',
    borderRadius: 12,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Urbanist-Regular',
    color: '#122C3E',
  },
  card: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 330,
  },
});

export default Home;

