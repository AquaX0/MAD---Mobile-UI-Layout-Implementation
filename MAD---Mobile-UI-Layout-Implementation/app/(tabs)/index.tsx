import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const GRID_IMAGES = [
  require('../../assets/images/1.webp'),
  require('../../assets/images/2.webp'),
  require('../../assets/images/3.webp'),
  require('../../assets/images/4.webp'),
  require('../../assets/images/5.webp'),
  require('../../assets/images/6.webp'),
];

const index = () => {
  const insets = useSafeAreaInsets();
  const handleButton1Press = () => {
    Alert.alert('Button 1 pressed!');
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.TopBar} />
      <Image source={require('../../assets/images/profile.webp')} style={styles.ProfileImage} />
      <Text style={styles.Username}>Username</Text>

      <View style={styles.ButtonRow}>
        <TouchableOpacity style={styles.Button1} onPress={handleButton1Press}>
          <Text style={styles.ButtonText}>BUTTON 1</Text>
        </TouchableOpacity>
        <View style={styles.Button2}><Text style={styles.ButtonText}>BUTTON 2</Text></View>
      </View>

      <View style={styles.SecondBar} />

      <View style={styles.GridContainer}>
        {GRID_IMAGES.map((src, index) => (
          <View key={index} style={styles.GridCell}>
            <Image source={src} style={styles.GridImage} resizeMode="cover" />
          </View>
        ))}
      </View>

      <View style={[styles.Button3, { paddingBottom: insets.bottom || 16 }]}> 
        <Text style={styles.ButtonText}>BUTTON 3</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 0,
  },
  TopBar: {
    width: '100%',
    height: 25,
    backgroundColor: '#4ee4c1',
    marginBottom: 16,
  },
  ProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 12,
  },
  Username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  ButtonRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  Button1: {
    flex: 1,
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button2: {
    flex: 1,
    backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  SecondBar: {
    width: '100%',
    height: 17,
    backgroundColor: '#4ee4c1',
    marginBottom: 16,
  },
  GridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 16,
  },
  GridCell: {
    width: '30%',
    aspectRatio: 1,
    margin: '1%',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  GridImage: {
    width: '100%',
    height: '100%',
  },
  Button3: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
})

export default index